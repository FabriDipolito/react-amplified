import { config, Lambda } from 'aws-sdk';

config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIAZSQRCLK2NMCN5T7Z',
  secretAccessKey: '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',
});

const lambda = new Lambda();

const getData = () => {
  const params = {
    FunctionName: "arn:aws:lambda:us-east-1:658239543988:function:getTICVI",
  };

  return new Promise((resolve, reject) => {
    lambda.invoke(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data.Payload.toString());
        resolve(json);
      }
    });
  });
};

export default getData;
