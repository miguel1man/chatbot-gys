# G&S Chatbot

Chatbot with OpenAI and Astra DB.

## Prerequisites

- An Astra DB account. You can [create one here](https://astra.datastax.com/register).
  - An Astra Vector Database
- An OpenAI account. You can [create one here](https://platform.openai.com/).

## Setup

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install` in your terminal.
3. Set up the following environment variables in your IDE or `.env` file:
   - `ASTRA_DB_NAMESPACE`: The existing Astra Namespace/Keyspace **_in a vector-enabled DB_**
   - `OPENAI_API_KEY`: Your API key for OpenAI
   - `ASTRA_DB_ID`: Your Astra DB vector database id
   - `ASTRA_DB_REGION`: Your Astra DB database region
   - `ASTRA_DB_APPLICATION_TOKEN`: The generated app token for your Astra database
     - To create a new token go to your database's `Connect` tab and click `Generate Token`. (your Application Token begins with `AstraCS:...`)
4. Populate your database with sample data by running `npm run seed` in your terminal.

## Running the Project

1. Run `npm run dev` to start the development server.
2. Open `http://localhost:3000` to view the chatbot in your browser.
