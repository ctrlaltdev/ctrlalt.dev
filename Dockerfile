FROM node:lts-alpine AS builder

WORKDIR /app

# Enable corepack for Yarn Berry
RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build


FROM node:lts-alpine AS runner

WORKDIR /app

# Enable corepack for Yarn Berry
RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./

# Install production dependencies only
RUN yarn workspaces focus --production

COPY --from=builder /app/build/ build/

USER node

CMD ["node", "build/index.js"]
