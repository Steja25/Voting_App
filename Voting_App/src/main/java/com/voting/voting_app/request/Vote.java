package com.voting.voting_app.request;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class Vote {
private Long pollId;
private int optionIndex;

}
