// @ts-ignore
import { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">Join our email list for future updates.</h3>
      <div className="mc__field-container">
        <input
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="your@email.com"
          isRequired
          class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <input
        label="subscribe"
        type="submit"
        formValues={[email, firstName, lastName]}
        class="block max-w-[109px] bg-[#FF5C57] hover:bg-[#FF5C57] text-white font-bold py-2 px-4 rounded self-end"
      />
    </form>
  );
};

export function SubScribe() {
  const url =
    "https://gmail.us9.list-manage.com/subscribe/post?u=4d7c1a52aff41d4a89a0b1e2e&amp;id=ed1216693c&amp;f_id=00e817e1f0";

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
}
