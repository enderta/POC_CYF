import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { GetCommand } from '@aws-sdk/lib-dynamodb';

const ddbMock = mockClient(DynamoDBDocumentClient);

// Mock behavior for GetCommand
ddbMock.on(GetCommand).resolves({
    Item: { id: 'user1', name: 'John' },
});
