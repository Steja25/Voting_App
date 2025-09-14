package com.voting.voting_app.service;

import com.voting.voting_app.model.OptionVote;
import com.voting.voting_app.model.Poll;
import com.voting.voting_app.repository.PollRepository;
import com.voting.voting_app.request.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {
    @Autowired
    private PollRepository pollRepository;
    public Poll createPoll(Poll poll) {
        return pollRepository.save(poll);

    }
    public List<Poll> getPolls() {
        return pollRepository.findAll();
    }
    public Optional<Poll> getPollById(Long id){
        return pollRepository.findById(id);
    }
    public void vote(Long id,int optionIndex){
        Poll poll = pollRepository.findById(id).
                       orElseThrow(()->new RuntimeException("poll not found"));
        List<OptionVote> options= poll.getOptions();
        if(optionIndex<0 || optionIndex>=options.size()){
            throw new RuntimeException("invalid option index");
        }
        OptionVote selectedOption = options.get(optionIndex);
        selectedOption.setVoteCount(selectedOption.getVoteCount()+1);
        pollRepository.save(poll);
    }
}
