import React from "react";
import InputField from "../Util/InputField";
import TextField from "../Util/TextField";
import PrimaryButton from "../Util/PrimaryButton";
import SecondaryButton from "../Util/SecondaryButton";

function PlayerForm({ form, edit, cancelEdit }) {
  return (
    <div className=" rounded-md border-2 overflow-hidden drop-shadow-md">
      <h2 className=" text-2xl font-medium bg-slate-900 text-white px-1 py-1.5">
        Player Form
      </h2>
      <form
        action={edit ? "/edit-player" : "/add-player"}
        method="post"
        className="py-3 px-3 bg-white"
      >
        {edit && (
          <input type="text" name="id" id="" hidden defaultValue={form.id} />
        )}
        <InputField name={"name"} req={true} defaultValue={form.name}>
          Player Name
        </InputField>
        <InputField name={"imageUrl"} req={true} defaultValue={form.imageUrl}>
          Player ImageUrl
        </InputField>
        <InputField
          name={"birthday"}
          type="date"
          req={true}
          defaultValue={
            form.birthday === ""
              ? ""
              : new Date(form.birthday).toISOString().split("T")[0]
          }
        >
          Player Birthday
        </InputField>
        <InputField
          name={"birthplace"}
          req={true}
          defaultValue={form.birthplace}
        >
          Player Birthplace
        </InputField>
        <TextField name={"profile"} req={true} defaultValue={form.profile}>
          Player Profile
        </TextField>
        <div className="pt-2 space-x-3">
          {!edit && <PrimaryButton type="submit">Submit Info</PrimaryButton>}
          {edit && (
            <>
              <PrimaryButton type="submit">Save Changes</PrimaryButton>
              <SecondaryButton onClickFunction={cancelEdit}>
                Cancel Changes
              </SecondaryButton>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default PlayerForm;
