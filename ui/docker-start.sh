# docker build -t ui .
docker run -p "3000:3000" -e DEVELOPMENT="true" -e REACT_APP_API_PORT="3030" -e REACT_APP_DEVELOPMENT="false" ui