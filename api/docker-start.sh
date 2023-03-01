# docker build -t api .
docker run \
-p "3030:3001" \
-e OPENAI_API_KEY=$OPENAI_API_KEY \
api