export const getAllData = (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      problem: `Internal server error`,
    });
  }
};

export const getDataById = (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const findData = data.find((item) => item.id === userId);

    if (findData) {
      res.status(200).json({
        data: findData,
        length: data,
      });
    } else {
      res.status(400).json({
        message: `ID didn't match`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      problem: `Internal server error`,
    });
  }
};

export const postData = (req, res) => {
  try {
    const { link, title, docs } = req.body;

    if (link && title && docs) {
      const newPost = {
        id: data.length + 1,
        link: link,
        title: title,
        docs: docs,
      };

      data.push(newPost);

      res.status(200).json({
        message: `Data posted successfully`,
        postData: newPost,
      });
    } else {
      res.status(400).json({
        message: `please provide all the necessary information`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      problem: `internal server error`,
    });
  }
};

export const updateData = (req, res) => {
  const { link, title, docs } = req.body;
  try {
    const userId = parseInt(req.params.id);
    //finding the previous data to preserve the previous state
    const findData = data.find((item) => item.id === userId);

    if (findData) {
      //creating the updated version of data
      const updatedData = {
        id: userId,
        link: link || findData.link,
        title: title || findData.title,
        docs: docs || findData.docs,
      };

      // finding the index to reassign the array value
      const findIndex = data.findIndex((item) => item.id === userId);
      //reassigning the array data
      data[findIndex] = updatedData;
      // sending response
      res.status(200).json({
        message: `Data Updated successfully`,
        upDatedData: updatedData,
      });
    } else {
      res.status(400).json({
        message: `ID didn't match`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      problem: `Internal server error`,
    });
  }
};

export const daleteData = (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const findIndex = data.findIndex((item) => item.id === userId);
    if (findIndex >= 0) {
      data.splice(findIndex, 1);

      res.status(200).json({
        message: `Data deleted succcessfully`,
      });
    } else {
      res.status(400).json({
        message: `User id didn't exists`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      problem: `erro deleting data`,
    });
  }
};

const data = [
  {
    id: 1,
    link: `https://www.youtube.com/embed/xFFs9UgOAlE?si=LGRa6LDJGKvh0o8c`,
    title: "this is a demo title 1",
    docs: "this is a demo docs 1",
  },
  {
    id: 2,
    link: `https://www.youtube.com/embed/K2lfyPAwD80?si=1YwFxS_zBf8KqKre`,
    title: "this is a demo title 2",
    docs: "this is a demo docs 2",
  },
  {
    id: 3,
    link: `https://www.youtube.com/embed/SccSCuHhOw0?si=SaBNo94WgRUcIdQk`,
    title: "this is a demo title 3",
    docs: "this is a demo docs 3",
  },
  {
    id: 4,
    link: `https://www.youtube.com/embed/wioAFuHzcao?si=gmy81HHsK-ttSN_o`,
    title: "this is a demo title 4",
    docs: "this is a demo docs 4",
  },
  {
    id: 5,
    link: `https://www.youtube.com/embed/Igt89sDaboE?si=nTYQYxkAU1zY10G4`,
    title: "this is a demo title 5",
    docs: "this is a demo docs 5",
  },
];
