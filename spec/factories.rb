FactoryGirl.define do 
  factory :post do 
    title {Faker::Commerce.product_name}
    content {Faker::Lorem.paragraph(10)}
    post_date {Faker::Date.backward(365)}
  end

  factory :user do
    name {Faker::Name.name}
    username {Faker::Internet.user_name}
    email {Faker::Internet.email}
    password {Faker::Internet.password}
  end

  factory :comment do 
    body {Faker::Lorem.sentence}
  end

end