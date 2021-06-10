// import React, { useState, useEffect } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';

// //import styled from 'styled-components';
// import { Formik, Form } from 'formik';
// import * as yup from 'yup';
// import { v4 } from 'uuid';

// const AddTrayWrapper = styled.div`
//   display: grid;
//   justify-content: center;
//   grid-gap: 1rem;
//   background-color: var(--surface-light-box);
//   border-radius: 2%;
//   color: black;
//   padding: 1rem;
// `;

// const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const FormikComponentWrapper = styled(Form)`
//   display: grid;
//   align-items: center;
//   grid-gap: 1rem;
//   padding: 1rem;
// `;

// const FormsWrapper = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: center;
//   grid-gap: 1rem 0;
//   padding: 0.5rem 0;
//   min-width: 250px;
//   background-color: var(--surface-light);
// `;

// const validationSchema = yup.object({
//   trailToAdd: yup.object().required('Tray Parent Is Required'),
//   traySubject: yup.string().required('Tray Name Is Required'),
//   trayDescription: yup.string().required('Tray Description Is Required'),
//   trayLink: yup.string().required('Tray Link Is Required'),
// });

// const AddTrayForm = ({
//   onNewTraySubmit,
//   trails,
//   imageData,
//   setImageData,
//   traysAction,
//   trailsAlert,
// }) => {
//   return (
//     <Formik
//       initialValues={{
//         trailToAdd: '',
//         traySubject: '',
//         trayDescription: '',
//         trayLink: '',
//         backgroundImage: '',
//       }}
//       validationSchema={validationSchema}
//       onSubmit={onNewTraySubmit}
//     >
//       {({ values, resetForm, setFieldValue }) => (
//         <FormikComponentWrapper>
//           <Tray
//             traySubject={values.traySubject}
//             trayDescription={values.trayDescription}
//             trayLink={values.trayLink}
//             backgroundImage={imageData}
//             target={true}
//           />
//           <FormsWrapper>
//             <SelectField
//               name="trailToAdd"
//               label="Trail"
//               sortValuesBy="trailName"
//               width="140px"
//               values={trails}
//             />
//             <TextField
//               name="traySubject"
//               type="input"
//               placeholder="My New Tray"
//               label="Name"
//               hasCustomWidth="140px"
//             />
//             <TextField
//               name="trayDescription"
//               type="input"
//               placeholder="Tray Description"
//               label="Description"
//               hasCustomWidth="140px"
//             />
//             <TextField
//               name="trayLink"
//               type="input"
//               placeholder="For example: docs, or blog"
//               label="Link"
//               hasCustomWidth="140px"
//             />
//             <ImageInput
//               name="backgroundImage"
//               customOnChange={setFieldValue}
//               setImageData={setImageData}
//             />
//             <FormikSubmitButton
//               name="submit"
//               text="Add"
//               isFetching={traysAction}
//             />
//           </FormsWrapper>
//         </FormikComponentWrapper>
//       )}
//     </Formik>
//   );
// };

// const AddTray = () => {
//   const [imageData, setImageData] = useState({});
//   // const {
//   //   trays: { fetchedTrays },
//   //   traysAlert,
//   //   traysLoading: { trayItemAction },
//   // } = useSelector((state) => state.trays);
//   // const dispatch = useDispatch();

//   // eslint-disable-next-line
//   // useEffect(() => {
//   //   return () => {
//   //     dispatch(clearTrailsAlert());
//   //   };
//   // }, []);

//   // const onNewTraySubmit = (formData, { resetForm }) => {
//   //   dispatch(clearTraysAlert());
//   //   const data = {
//   //     ...formData,
//   //     _id: v4(),
//   //     backgroundImage: imageData,
//   //   };
//   //   dispatch(addTrayItem(data));
//   //   setImageData({});
//   //   resetForm({});
//   // };

//   return (
//     <>
//       <AddTrayForm
//         onNewTraySubmit={onNewTraySubmit}
//         imageData={imageData}
//         setImageData={setImageData}
//         trails={fetchedTrays}
//         traysAction={trayItemAction}
//         trailsAlert={traysAlert}
//       />
//     </>
//   );
// };

// export default AddTray;
