import { useState } from "react";
import { patchArticleVotes } from "../utils/patchArticleData";
export function ArticleLikeBtn({ setVoteChangeState, article_id, article }) {
  const [isLikeDisabled, setIsLikeDisabled] = useState(false);
  const [isDislikeDisabled, setIsDislikeDisabled] = useState(false);
  async function eventHandlerLike() {
    async function clickVoteBtn() {
      try {
        if (isLikeDisabled) {
          return;
        }
        setVoteChangeState(1);
        setIsLikeDisabled(true);
        await patchArticleVotes(article_id, { inc_votes: 1 });
      } catch {
        setVoteChangeState(0);
      }
    }
    await clickVoteBtn();
  }
  async function eventHandlerDislike() {
    async function clickVoteBtn() {
      try {
        if (isDislikeDisabled) {
          return;
        }
        setVoteChangeState(-1);
        setIsDislikeDisabled(true);
        await patchArticleVotes(article_id, { inc_votes: -1 });
      } catch {
        setVoteChangeState(0);
      }
    }
    await clickVoteBtn();
  }
  return (
    <>
      <button onClick={eventHandlerLike} disabled={isLikeDisabled}>
        Like
      </button>
      <button onClick={eventHandlerDislike} disabled={isDislikeDisabled}>
        Dislike
      </button>
    </>
  );
}
