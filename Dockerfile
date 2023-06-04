# BASE 이미지 
FROM node:16.14

# 작업 디렉토리 
WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm ci

# 소스코드 복사 및 빌드
COPY . .
RUN npm run build


RUN npm install pm2 -f
EXPOSE 8080

CMD ["npm", "run", "start:prod"]

