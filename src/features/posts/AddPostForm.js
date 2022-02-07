import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'
import { Button, Form, Input } from 'antd';

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="postTitle"
          rules={[{ required: true, message: 'Por favor ingresa el título del Post' }]}
        >
          <Input type={'text'} placeholder='Nuevo Título' value={title} onChange={onTitleChanged}/>
        </Form.Item>

        <Form.Item
          name="postContent"
          rules={[{ required: true, message: 'Por favor ingresa el título del Post' }]}
        >
          <Input type={'text'} value={content} onChange={onContentChanged} />
        </Form.Item>

        <Button type="primary" htmlType="submit" onClick={onSavePostClicked} className="login-form-button">Guardar Post</Button>
      </Form>
    </section>
  )
}