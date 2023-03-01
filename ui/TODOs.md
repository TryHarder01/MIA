- state handling is wrong, not updating the right way. each keystroke does not update state. Think i might not be doing it the right way.

submitClickHandler {"companyDesc":"","companyName":"red","prodDesc":"" "targetAudience":""}
submitClickHandler after update {"timeout":10,"output":"","z":2,"y":0}

I think the problem is App.js keeps re-rendering which resets the state