# For Usecases
class UsecaseRecord < ActiveRecord::Base
  self.abstract_class = true

  class << self
    def connect
      establish_connection usecase_db_config
    end
    
    def disconnect
      result = remove_connection
      establish_connection default_db_config
      result
    end

    private

    def default_db_config
      Rails.configuration.database_configuration[Rails.env]
    end

    def usecase_db_config
      :usecase_record_database
    end
  end
end
