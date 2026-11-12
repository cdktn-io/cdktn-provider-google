# `vertexAiTrainingPipeline` Submodule <a name="`vertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google.vertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiTrainingPipeline <a name="VertexAiTrainingPipeline" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipeline(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  model_id: str,
  training_task_definition: str,
  training_task_inputs: str,
  deletion_policy: str = None,
  encryption_spec: VertexAiTrainingPipelineEncryptionSpec = None,
  id: str = None,
  input_data_config: VertexAiTrainingPipelineInputDataConfig = None,
  labels: typing.Mapping[str] = None,
  model_to_upload: VertexAiTrainingPipelineModelToUpload = None,
  parent_model: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiTrainingPipelineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition">training_task_definition</a></code> | <code>str</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs">training_task_inputs</a></code> | <code>str</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelToUpload">model_to_upload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.parentModel">parent_model</a></code> | <code>str</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.displayName"></a>

- *Type:* str

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelId"></a>

- *Type:* str

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_id VertexAiTrainingPipeline#model_id}

---

##### `training_task_definition`<sup>Required</sup> <a name="training_task_definition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition"></a>

- *Type:* str

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_definition VertexAiTrainingPipeline#training_task_definition}

---

##### `training_task_inputs`<sup>Required</sup> <a name="training_task_inputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs"></a>

- *Type:* str

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_inputs VertexAiTrainingPipeline#training_task_inputs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deletion_policy VertexAiTrainingPipeline#deletion_policy}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#input_data_config VertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `model_to_upload`<sup>Optional</sup> <a name="model_to_upload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelToUpload"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_to_upload VertexAiTrainingPipeline#model_to_upload}

---

##### `parent_model`<sup>Optional</sup> <a name="parent_model" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.parentModel"></a>

- *Type:* str

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parent_model VertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.region"></a>

- *Type:* str

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#region VertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeouts VertexAiTrainingPipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig">put_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload">put_model_to_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetInputDataConfig">reset_input_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetModelToUpload">reset_model_to_upload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetParentModel">reset_parent_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

##### `put_input_data_config` <a name="put_input_data_config" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig"></a>

```python
def put_input_data_config(
  dataset_id: str,
  annotation_schema_uri: str = None,
  annotations_filter: str = None,
  bigquery_destination: VertexAiTrainingPipelineInputDataConfigBigqueryDestination = None,
  filter_split: VertexAiTrainingPipelineInputDataConfigFilterSplit = None,
  fraction_split: VertexAiTrainingPipelineInputDataConfigFractionSplit = None,
  gcs_destination: VertexAiTrainingPipelineInputDataConfigGcsDestination = None,
  persist_ml_use_assignment: bool | IResolvable = None,
  predefined_split: VertexAiTrainingPipelineInputDataConfigPredefinedSplit = None,
  saved_query_id: str = None,
  stratified_split: VertexAiTrainingPipelineInputDataConfigStratifiedSplit = None,
  timestamp_split: VertexAiTrainingPipelineInputDataConfigTimestampSplit = None
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.datasetId"></a>

- *Type:* str

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#dataset_id VertexAiTrainingPipeline#dataset_id}

---

###### `annotation_schema_uri`<sup>Optional</sup> <a name="annotation_schema_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.annotationSchemaUri"></a>

- *Type:* str

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotation_schema_uri VertexAiTrainingPipeline#annotation_schema_uri}

---

###### `annotations_filter`<sup>Optional</sup> <a name="annotations_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.annotationsFilter"></a>

- *Type:* str

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotations_filter VertexAiTrainingPipeline#annotations_filter}

---

###### `bigquery_destination`<sup>Optional</sup> <a name="bigquery_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.bigqueryDestination"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#bigquery_destination VertexAiTrainingPipeline#bigquery_destination}

---

###### `filter_split`<sup>Optional</sup> <a name="filter_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.filterSplit"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#filter_split VertexAiTrainingPipeline#filter_split}

---

###### `fraction_split`<sup>Optional</sup> <a name="fraction_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.fractionSplit"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#fraction_split VertexAiTrainingPipeline#fraction_split}

---

###### `gcs_destination`<sup>Optional</sup> <a name="gcs_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.gcsDestination"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#gcs_destination VertexAiTrainingPipeline#gcs_destination}

---

###### `persist_ml_use_assignment`<sup>Optional</sup> <a name="persist_ml_use_assignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.persistMlUseAssignment"></a>

- *Type:* bool | cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#persist_ml_use_assignment VertexAiTrainingPipeline#persist_ml_use_assignment}

---

###### `predefined_split`<sup>Optional</sup> <a name="predefined_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.predefinedSplit"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predefined_split VertexAiTrainingPipeline#predefined_split}

---

###### `saved_query_id`<sup>Optional</sup> <a name="saved_query_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.savedQueryId"></a>

- *Type:* str

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#saved_query_id VertexAiTrainingPipeline#saved_query_id}

---

###### `stratified_split`<sup>Optional</sup> <a name="stratified_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.stratifiedSplit"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#stratified_split VertexAiTrainingPipeline#stratified_split}

---

###### `timestamp_split`<sup>Optional</sup> <a name="timestamp_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.timestampSplit"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timestamp_split VertexAiTrainingPipeline#timestamp_split}

---

##### `put_model_to_upload` <a name="put_model_to_upload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload"></a>

```python
def put_model_to_upload(
  display_name: str,
  artifact_uri: str = None,
  container_spec: VertexAiTrainingPipelineModelToUploadContainerSpec = None,
  description: str = None,
  encryption_spec: VertexAiTrainingPipelineModelToUploadEncryptionSpec = None,
  explanation_spec: VertexAiTrainingPipelineModelToUploadExplanationSpec = None,
  labels: typing.Mapping[str] = None,
  version_aliases: typing.List[str] = None,
  version_description: str = None
) -> None
```

###### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.displayName"></a>

- *Type:* str

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

###### `artifact_uri`<sup>Optional</sup> <a name="artifact_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.artifactUri"></a>

- *Type:* str

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#artifact_uri VertexAiTrainingPipeline#artifact_uri}

---

###### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.containerSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_spec VertexAiTrainingPipeline#container_spec}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.description"></a>

- *Type:* str

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#description VertexAiTrainingPipeline#description}

---

###### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

###### `explanation_spec`<sup>Optional</sup> <a name="explanation_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.explanationSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#explanation_spec VertexAiTrainingPipeline#explanation_spec}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

###### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.versionAliases"></a>

- *Type:* typing.List[str]

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_aliases VertexAiTrainingPipeline#version_aliases}

---

###### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.versionDescription"></a>

- *Type:* str

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_description VertexAiTrainingPipeline#version_description}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_data_config` <a name="reset_input_data_config" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetInputDataConfig"></a>

```python
def reset_input_data_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_model_to_upload` <a name="reset_model_to_upload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetModelToUpload"></a>

```python
def reset_model_to_upload() -> None
```

##### `reset_parent_model` <a name="reset_parent_model" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetParentModel"></a>

```python
def reset_parent_model() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipeline.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipeline.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipeline.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipeline.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VertexAiTrainingPipeline to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference">VertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList">VertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference">VertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUpload">model_to_upload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference">VertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference">VertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskMetadata">training_task_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfigInput">input_data_config_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUploadInput">model_to_upload_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModelInput">parent_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinitionInput">training_task_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputsInput">training_task_inputs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModel">parent_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinition">training_task_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputs">training_task_inputs</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiTrainingPipelineEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference">VertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.error"></a>

```python
error: VertexAiTrainingPipelineErrorList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList">VertexAiTrainingPipelineErrorList</a>

---

##### `input_data_config`<sup>Required</sup> <a name="input_data_config" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfig"></a>

```python
input_data_config: VertexAiTrainingPipelineInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference">VertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `model_to_upload`<sup>Required</sup> <a name="model_to_upload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUpload"></a>

```python
model_to_upload: VertexAiTrainingPipelineModelToUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference">VertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeouts"></a>

```python
timeouts: VertexAiTrainingPipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference">VertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `training_task_metadata`<sup>Required</sup> <a name="training_task_metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```python
training_task_metadata: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```python
encryption_spec_input: VertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_data_config_input`<sup>Optional</sup> <a name="input_data_config_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```python
input_data_config_input: VertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `model_to_upload_input`<sup>Optional</sup> <a name="model_to_upload_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUploadInput"></a>

```python
model_to_upload_input: VertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---

##### `parent_model_input`<sup>Optional</sup> <a name="parent_model_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModelInput"></a>

```python
parent_model_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VertexAiTrainingPipelineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---

##### `training_task_definition_input`<sup>Optional</sup> <a name="training_task_definition_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```python
training_task_definition_input: str
```

- *Type:* str

---

##### `training_task_inputs_input`<sup>Optional</sup> <a name="training_task_inputs_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```python
training_task_inputs_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `parent_model`<sup>Required</sup> <a name="parent_model" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModel"></a>

```python
parent_model: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `training_task_definition`<sup>Required</sup> <a name="training_task_definition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```python
training_task_definition: str
```

- *Type:* str

---

##### `training_task_inputs`<sup>Required</sup> <a name="training_task_inputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```python
training_task_inputs: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiTrainingPipelineConfig <a name="VertexAiTrainingPipelineConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  model_id: str,
  training_task_definition: str,
  training_task_inputs: str,
  deletion_policy: str = None,
  encryption_spec: VertexAiTrainingPipelineEncryptionSpec = None,
  id: str = None,
  input_data_config: VertexAiTrainingPipelineInputDataConfig = None,
  labels: typing.Mapping[str] = None,
  model_to_upload: VertexAiTrainingPipelineModelToUpload = None,
  parent_model: str = None,
  project: str = None,
  region: str = None,
  timeouts: VertexAiTrainingPipelineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelId">model_id</a></code> | <code>str</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskDefinition">training_task_definition</a></code> | <code>str</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskInputs">training_task_inputs</a></code> | <code>str</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.inputDataConfig">input_data_config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelToUpload">model_to_upload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.parentModel">parent_model</a></code> | <code>str</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.region">region</a></code> | <code>str</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_id VertexAiTrainingPipeline#model_id}

---

##### `training_task_definition`<sup>Required</sup> <a name="training_task_definition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```python
training_task_definition: str
```

- *Type:* str

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_definition VertexAiTrainingPipeline#training_task_definition}

---

##### `training_task_inputs`<sup>Required</sup> <a name="training_task_inputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```python
training_task_inputs: str
```

- *Type:* str

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_inputs VertexAiTrainingPipeline#training_task_inputs}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deletion_policy VertexAiTrainingPipeline#deletion_policy}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_data_config`<sup>Optional</sup> <a name="input_data_config" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```python
input_data_config: VertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#input_data_config VertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `model_to_upload`<sup>Optional</sup> <a name="model_to_upload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```python
model_to_upload: VertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_to_upload VertexAiTrainingPipeline#model_to_upload}

---

##### `parent_model`<sup>Optional</sup> <a name="parent_model" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.parentModel"></a>

```python
parent_model: str
```

- *Type:* str

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parent_model VertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#region VertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.timeouts"></a>

```python
timeouts: VertexAiTrainingPipelineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeouts VertexAiTrainingPipeline#timeouts}

---

### VertexAiTrainingPipelineEncryptionSpec <a name="VertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

### VertexAiTrainingPipelineError <a name="VertexAiTrainingPipelineError" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineError()
```


### VertexAiTrainingPipelineInputDataConfig <a name="VertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig(
  dataset_id: str,
  annotation_schema_uri: str = None,
  annotations_filter: str = None,
  bigquery_destination: VertexAiTrainingPipelineInputDataConfigBigqueryDestination = None,
  filter_split: VertexAiTrainingPipelineInputDataConfigFilterSplit = None,
  fraction_split: VertexAiTrainingPipelineInputDataConfigFractionSplit = None,
  gcs_destination: VertexAiTrainingPipelineInputDataConfigGcsDestination = None,
  persist_ml_use_assignment: bool | IResolvable = None,
  predefined_split: VertexAiTrainingPipelineInputDataConfigPredefinedSplit = None,
  saved_query_id: str = None,
  stratified_split: VertexAiTrainingPipelineInputDataConfigStratifiedSplit = None,
  timestamp_split: VertexAiTrainingPipelineInputDataConfigTimestampSplit = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">annotation_schema_uri</a></code> | <code>str</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">annotations_filter</a></code> | <code>str</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.filterSplit">filter_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.fractionSplit">fraction_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.gcsDestination">gcs_destination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">persist_ml_use_assignment</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">predefined_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.savedQueryId">saved_query_id</a></code> | <code>str</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">stratified_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.timestampSplit">timestamp_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#dataset_id VertexAiTrainingPipeline#dataset_id}

---

##### `annotation_schema_uri`<sup>Optional</sup> <a name="annotation_schema_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```python
annotation_schema_uri: str
```

- *Type:* str

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotation_schema_uri VertexAiTrainingPipeline#annotation_schema_uri}

---

##### `annotations_filter`<sup>Optional</sup> <a name="annotations_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```python
annotations_filter: str
```

- *Type:* str

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotations_filter VertexAiTrainingPipeline#annotations_filter}

---

##### `bigquery_destination`<sup>Optional</sup> <a name="bigquery_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```python
bigquery_destination: VertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#bigquery_destination VertexAiTrainingPipeline#bigquery_destination}

---

##### `filter_split`<sup>Optional</sup> <a name="filter_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```python
filter_split: VertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#filter_split VertexAiTrainingPipeline#filter_split}

---

##### `fraction_split`<sup>Optional</sup> <a name="fraction_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```python
fraction_split: VertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#fraction_split VertexAiTrainingPipeline#fraction_split}

---

##### `gcs_destination`<sup>Optional</sup> <a name="gcs_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```python
gcs_destination: VertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#gcs_destination VertexAiTrainingPipeline#gcs_destination}

---

##### `persist_ml_use_assignment`<sup>Optional</sup> <a name="persist_ml_use_assignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```python
persist_ml_use_assignment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#persist_ml_use_assignment VertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `predefined_split`<sup>Optional</sup> <a name="predefined_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```python
predefined_split: VertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predefined_split VertexAiTrainingPipeline#predefined_split}

---

##### `saved_query_id`<sup>Optional</sup> <a name="saved_query_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```python
saved_query_id: str
```

- *Type:* str

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#saved_query_id VertexAiTrainingPipeline#saved_query_id}

---

##### `stratified_split`<sup>Optional</sup> <a name="stratified_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```python
stratified_split: VertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#stratified_split VertexAiTrainingPipeline#stratified_split}

---

##### `timestamp_split`<sup>Optional</sup> <a name="timestamp_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```python
timestamp_split: VertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timestamp_split VertexAiTrainingPipeline#timestamp_split}

---

### VertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="VertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination(
  output_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">output_uri</a></code> | <code>str</code> | The BigQuery table to which the output is to be written. |

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri VertexAiTrainingPipeline#output_uri}

---

### VertexAiTrainingPipelineInputDataConfigFilterSplit <a name="VertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit(
  test_filter: str,
  training_filter: str,
  validation_filter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">test_filter</a></code> | <code>str</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">training_filter</a></code> | <code>str</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">validation_filter</a></code> | <code>str</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `test_filter`<sup>Required</sup> <a name="test_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```python
test_filter: str
```

- *Type:* str

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_filter VertexAiTrainingPipeline#test_filter}

---

##### `training_filter`<sup>Required</sup> <a name="training_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```python
training_filter: str
```

- *Type:* str

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_filter VertexAiTrainingPipeline#training_filter}

---

##### `validation_filter`<sup>Required</sup> <a name="validation_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```python
validation_filter: str
```

- *Type:* str

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_filter VertexAiTrainingPipeline#validation_filter}

---

### VertexAiTrainingPipelineInputDataConfigFractionSplit <a name="VertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit(
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineInputDataConfigGcsDestination <a name="VertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination(
  output_uri_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">output_uri_prefix</a></code> | <code>str</code> | The Cloud Storage URI prefix to write to. |

---

##### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```python
output_uri_prefix: str
```

- *Type:* str

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri_prefix VertexAiTrainingPipeline#output_uri_prefix}

---

### VertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="VertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit(
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">key</a></code> | <code>str</code> | The key is a name of one of the Dataset's data columns. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```python
key: str
```

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

### VertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="VertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">key</a></code> | <code>str</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```python
key: str
```

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="VertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">key</a></code> | <code>str</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```python
key: str
```

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineModelToUpload <a name="VertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload(
  display_name: str,
  artifact_uri: str = None,
  container_spec: VertexAiTrainingPipelineModelToUploadContainerSpec = None,
  description: str = None,
  encryption_spec: VertexAiTrainingPipelineModelToUploadEncryptionSpec = None,
  explanation_spec: VertexAiTrainingPipelineModelToUploadExplanationSpec = None,
  labels: typing.Mapping[str] = None,
  version_aliases: typing.List[str] = None,
  version_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.artifactUri">artifact_uri</a></code> | <code>str</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.description">description</a></code> | <code>str</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.explanationSpec">explanation_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionAliases">version_aliases</a></code> | <code>typing.List[str]</code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionDescription">version_description</a></code> | <code>str</code> | The description of this version. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `artifact_uri`<sup>Optional</sup> <a name="artifact_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```python
artifact_uri: str
```

- *Type:* str

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#artifact_uri VertexAiTrainingPipeline#artifact_uri}

---

##### `container_spec`<sup>Optional</sup> <a name="container_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```python
container_spec: VertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_spec VertexAiTrainingPipeline#container_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#description VertexAiTrainingPipeline#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `explanation_spec`<sup>Optional</sup> <a name="explanation_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```python
explanation_spec: VertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#explanation_spec VertexAiTrainingPipeline#explanation_spec}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `version_aliases`<sup>Optional</sup> <a name="version_aliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```python
version_aliases: typing.List[str]
```

- *Type:* typing.List[str]

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_aliases VertexAiTrainingPipeline#version_aliases}

---

##### `version_description`<sup>Optional</sup> <a name="version_description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_description VertexAiTrainingPipeline#version_description}

---

### VertexAiTrainingPipelineModelToUploadContainerSpec <a name="VertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec(
  image_uri: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  deployment_timeout: str = None,
  env: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecEnv] = None,
  grpc_ports: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts] = None,
  health_probe: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe = None,
  health_route: str = None,
  ports: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecPorts] = None,
  predict_route: str = None,
  shared_memory_size_mb: str = None,
  startup_probe: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">image_uri</a></code> | <code>str</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.args">args</a></code> | <code>typing.List[str]</code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.command">command</a></code> | <code>typing.List[str]</code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">deployment_timeout</a></code> | <code>str</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.env">env</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]</code> | env block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">grpc_ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]</code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">health_route</a></code> | <code>str</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]</code> | ports block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">predict_route</a></code> | <code>str</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">shared_memory_size_mb</a></code> | <code>str</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#image_uri VertexAiTrainingPipeline#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#args VertexAiTrainingPipeline#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

##### `deployment_timeout`<sup>Optional</sup> <a name="deployment_timeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```python
deployment_timeout: str
```

- *Type:* str

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deployment_timeout VertexAiTrainingPipeline#deployment_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```python
env: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#env VertexAiTrainingPipeline#env}

---

##### `grpc_ports`<sup>Optional</sup> <a name="grpc_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```python
grpc_ports: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#grpc_ports VertexAiTrainingPipeline#grpc_ports}

---

##### `health_probe`<sup>Optional</sup> <a name="health_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```python
health_probe: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_probe VertexAiTrainingPipeline#health_probe}

---

##### `health_route`<sup>Optional</sup> <a name="health_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```python
health_route: str
```

- *Type:* str

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_route VertexAiTrainingPipeline#health_route}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```python
ports: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#ports VertexAiTrainingPipeline#ports}

---

##### `predict_route`<sup>Optional</sup> <a name="predict_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```python
predict_route: str
```

- *Type:* str

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predict_route VertexAiTrainingPipeline#predict_route}

---

##### `shared_memory_size_mb`<sup>Optional</sup> <a name="shared_memory_size_mb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```python
shared_memory_size_mb: str
```

- *Type:* str

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#shared_memory_size_mb VertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```python
startup_probe: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#startup_probe VertexAiTrainingPipeline#startup_probe}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">value</a></code> | <code>str</code> | The value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#name VertexAiTrainingPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```python
value: str
```

- *Type:* str

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#value VertexAiTrainingPipeline#value}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts(
  container_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | The number of the port on the container. |

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe(
  exec: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```python
exec: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec(
  command: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">command</a></code> | <code>typing.List[str]</code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts(
  container_port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | The number of the port on the container. |

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe(
  exec: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```python
exec: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

##### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

##### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec(
  command: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">command</a></code> | <code>typing.List[str]</code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

### VertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="VertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

### VertexAiTrainingPipelineModelToUploadExplanationSpec <a name="VertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec(
  metadata: str = None,
  parameters: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">metadata</a></code> | <code>str</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">parameters</a></code> | <code>str</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#metadata VertexAiTrainingPipeline#metadata}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parameters VertexAiTrainingPipeline#parameters}

---

### VertexAiTrainingPipelineTimeouts <a name="VertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiTrainingPipelineEncryptionSpecOutputReference <a name="VertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---


### VertexAiTrainingPipelineErrorList <a name="VertexAiTrainingPipelineErrorList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiTrainingPipelineErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VertexAiTrainingPipelineErrorOutputReference <a name="VertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError">VertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineError
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError">VertexAiTrainingPipelineError</a>

---


### VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">output_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">output_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_uri_input`<sup>Optional</sup> <a name="output_uri_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```python
output_uri_input: str
```

- *Type:* str

---

##### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```python
output_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">test_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">training_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">validation_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">test_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">training_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">validation_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `test_filter_input`<sup>Optional</sup> <a name="test_filter_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```python
test_filter_input: str
```

- *Type:* str

---

##### `training_filter_input`<sup>Optional</sup> <a name="training_filter_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```python
training_filter_input: str
```

- *Type:* str

---

##### `validation_filter_input`<sup>Optional</sup> <a name="validation_filter_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```python
validation_filter_input: str
```

- *Type:* str

---

##### `test_filter`<sup>Required</sup> <a name="test_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```python
test_filter: str
```

- *Type:* str

---

##### `training_filter`<sup>Required</sup> <a name="training_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```python
training_filter: str
```

- *Type:* str

---

##### `validation_filter`<sup>Required</sup> <a name="validation_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```python
validation_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">reset_test_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">reset_validation_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_test_fraction` <a name="reset_test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```python
def reset_test_fraction() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_validation_fraction` <a name="reset_validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```python
def reset_validation_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">test_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">validation_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `test_fraction_input`<sup>Optional</sup> <a name="test_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```python
test_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction_input`<sup>Optional</sup> <a name="validation_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```python
validation_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `test_fraction`<sup>Required</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction`<sup>Required</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">output_uri_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">output_uri_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_uri_prefix_input`<sup>Optional</sup> <a name="output_uri_prefix_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```python
output_uri_prefix_input: str
```

- *Type:* str

---

##### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```python
output_uri_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### VertexAiTrainingPipelineInputDataConfigOutputReference <a name="VertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">put_bigquery_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">put_filter_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">put_fraction_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">put_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">put_predefined_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">put_stratified_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">put_timestamp_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">reset_annotation_schema_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">reset_annotations_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">reset_bigquery_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">reset_filter_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">reset_fraction_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">reset_gcs_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">reset_persist_ml_use_assignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">reset_predefined_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">reset_saved_query_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">reset_stratified_split</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">reset_timestamp_split</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bigquery_destination` <a name="put_bigquery_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```python
def put_bigquery_destination(
  output_uri: str
) -> None
```

###### `output_uri`<sup>Required</sup> <a name="output_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.outputUri"></a>

- *Type:* str

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri VertexAiTrainingPipeline#output_uri}

---

##### `put_filter_split` <a name="put_filter_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```python
def put_filter_split(
  test_filter: str,
  training_filter: str,
  validation_filter: str
) -> None
```

###### `test_filter`<sup>Required</sup> <a name="test_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.testFilter"></a>

- *Type:* str

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_filter VertexAiTrainingPipeline#test_filter}

---

###### `training_filter`<sup>Required</sup> <a name="training_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.trainingFilter"></a>

- *Type:* str

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_filter VertexAiTrainingPipeline#training_filter}

---

###### `validation_filter`<sup>Required</sup> <a name="validation_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.validationFilter"></a>

- *Type:* str

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_filter VertexAiTrainingPipeline#validation_filter}

---

##### `put_fraction_split` <a name="put_fraction_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```python
def put_fraction_split(
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
) -> None
```

###### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.testFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

###### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.validationFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

##### `put_gcs_destination` <a name="put_gcs_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```python
def put_gcs_destination(
  output_uri_prefix: str
) -> None
```

###### `output_uri_prefix`<sup>Required</sup> <a name="output_uri_prefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.outputUriPrefix"></a>

- *Type:* str

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri_prefix VertexAiTrainingPipeline#output_uri_prefix}

---

##### `put_predefined_split` <a name="put_predefined_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```python
def put_predefined_split(
  key: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.key"></a>

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `put_stratified_split` <a name="put_stratified_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```python
def put_stratified_split(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.key"></a>

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

###### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.testFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

###### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.validationFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

##### `put_timestamp_split` <a name="put_timestamp_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```python
def put_timestamp_split(
  key: str,
  test_fraction: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  validation_fraction: typing.Union[int, float] = None
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.key"></a>

- *Type:* str

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

###### `test_fraction`<sup>Optional</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.testFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

###### `validation_fraction`<sup>Optional</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.validationFraction"></a>

- *Type:* typing.Union[int, float]

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

##### `reset_annotation_schema_uri` <a name="reset_annotation_schema_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```python
def reset_annotation_schema_uri() -> None
```

##### `reset_annotations_filter` <a name="reset_annotations_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```python
def reset_annotations_filter() -> None
```

##### `reset_bigquery_destination` <a name="reset_bigquery_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```python
def reset_bigquery_destination() -> None
```

##### `reset_filter_split` <a name="reset_filter_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```python
def reset_filter_split() -> None
```

##### `reset_fraction_split` <a name="reset_fraction_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```python
def reset_fraction_split() -> None
```

##### `reset_gcs_destination` <a name="reset_gcs_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```python
def reset_gcs_destination() -> None
```

##### `reset_persist_ml_use_assignment` <a name="reset_persist_ml_use_assignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```python
def reset_persist_ml_use_assignment() -> None
```

##### `reset_predefined_split` <a name="reset_predefined_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```python
def reset_predefined_split() -> None
```

##### `reset_saved_query_id` <a name="reset_saved_query_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```python
def reset_saved_query_id() -> None
```

##### `reset_stratified_split` <a name="reset_stratified_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```python
def reset_stratified_split() -> None
```

##### `reset_timestamp_split` <a name="reset_timestamp_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```python
def reset_timestamp_split() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">bigquery_destination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">filter_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">fraction_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">gcs_destination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">predefined_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">stratified_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">timestamp_split</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">annotation_schema_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">annotations_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">bigquery_destination_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">filter_split_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">fraction_split_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">gcs_destination_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">persist_ml_use_assignment_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">predefined_split_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">saved_query_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">stratified_split_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">timestamp_split_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">annotation_schema_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">annotations_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">persist_ml_use_assignment</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">saved_query_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bigquery_destination`<sup>Required</sup> <a name="bigquery_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```python
bigquery_destination: VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `filter_split`<sup>Required</sup> <a name="filter_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```python
filter_split: VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `fraction_split`<sup>Required</sup> <a name="fraction_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```python
fraction_split: VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `gcs_destination`<sup>Required</sup> <a name="gcs_destination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```python
gcs_destination: VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `predefined_split`<sup>Required</sup> <a name="predefined_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```python
predefined_split: VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `stratified_split`<sup>Required</sup> <a name="stratified_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```python
stratified_split: VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `timestamp_split`<sup>Required</sup> <a name="timestamp_split" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```python
timestamp_split: VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `annotation_schema_uri_input`<sup>Optional</sup> <a name="annotation_schema_uri_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```python
annotation_schema_uri_input: str
```

- *Type:* str

---

##### `annotations_filter_input`<sup>Optional</sup> <a name="annotations_filter_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```python
annotations_filter_input: str
```

- *Type:* str

---

##### `bigquery_destination_input`<sup>Optional</sup> <a name="bigquery_destination_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```python
bigquery_destination_input: VertexAiTrainingPipelineInputDataConfigBigqueryDestination
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `filter_split_input`<sup>Optional</sup> <a name="filter_split_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```python
filter_split_input: VertexAiTrainingPipelineInputDataConfigFilterSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `fraction_split_input`<sup>Optional</sup> <a name="fraction_split_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```python
fraction_split_input: VertexAiTrainingPipelineInputDataConfigFractionSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `gcs_destination_input`<sup>Optional</sup> <a name="gcs_destination_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```python
gcs_destination_input: VertexAiTrainingPipelineInputDataConfigGcsDestination
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `persist_ml_use_assignment_input`<sup>Optional</sup> <a name="persist_ml_use_assignment_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```python
persist_ml_use_assignment_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `predefined_split_input`<sup>Optional</sup> <a name="predefined_split_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```python
predefined_split_input: VertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `saved_query_id_input`<sup>Optional</sup> <a name="saved_query_id_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```python
saved_query_id_input: str
```

- *Type:* str

---

##### `stratified_split_input`<sup>Optional</sup> <a name="stratified_split_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```python
stratified_split_input: VertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `timestamp_split_input`<sup>Optional</sup> <a name="timestamp_split_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```python
timestamp_split_input: VertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `annotation_schema_uri`<sup>Required</sup> <a name="annotation_schema_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```python
annotation_schema_uri: str
```

- *Type:* str

---

##### `annotations_filter`<sup>Required</sup> <a name="annotations_filter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```python
annotations_filter: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `persist_ml_use_assignment`<sup>Required</sup> <a name="persist_ml_use_assignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```python
persist_ml_use_assignment: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `saved_query_id`<sup>Required</sup> <a name="saved_query_id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```python
saved_query_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---


### VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigPredefinedSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">reset_test_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">reset_validation_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_test_fraction` <a name="reset_test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```python
def reset_test_fraction() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_validation_fraction` <a name="reset_validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```python
def reset_validation_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">test_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">validation_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `test_fraction_input`<sup>Optional</sup> <a name="test_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```python
test_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction_input`<sup>Optional</sup> <a name="validation_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```python
validation_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `test_fraction`<sup>Required</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction`<sup>Required</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigStratifiedSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">reset_test_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">reset_validation_fraction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_test_fraction` <a name="reset_test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```python
def reset_test_fraction() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_validation_fraction` <a name="reset_validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```python
def reset_validation_fraction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">test_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">validation_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">test_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">validation_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `test_fraction_input`<sup>Optional</sup> <a name="test_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```python
test_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction_input`<sup>Optional</sup> <a name="validation_fraction_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```python
validation_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `test_fraction`<sup>Required</sup> <a name="test_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```python
test_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_fraction`<sup>Required</sup> <a name="validation_fraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```python
validation_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineInputDataConfigTimestampSplit
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

---


### VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiTrainingPipelineModelToUploadContainerSpecEnv
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

---


### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">reset_command</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">put_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exec` <a name="put_exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```python
def put_exec(
  command: typing.List[str] = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.command"></a>

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

##### `reset_exec` <a name="reset_exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">exec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```python
exec: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```python
exec_input: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">put_grpc_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">put_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">put_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">reset_deployment_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">reset_grpc_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">reset_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">reset_health_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">reset_predict_route</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">reset_shared_memory_size_mb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">reset_startup_probe</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```python
def put_env(
  value: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecEnv]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

---

##### `put_grpc_ports` <a name="put_grpc_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```python
def put_grpc_ports(
  value: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

---

##### `put_health_probe` <a name="put_health_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```python
def put_health_probe(
  exec: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.exec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

##### `put_ports` <a name="put_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```python
def put_ports(
  value: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

---

##### `put_startup_probe` <a name="put_startup_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```python
def put_startup_probe(
  exec: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec = None,
  period_seconds: typing.Union[int, float] = None,
  timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.exec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

###### `period_seconds`<sup>Optional</sup> <a name="period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.periodSeconds"></a>

- *Type:* typing.Union[int, float]

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

###### `timeout_seconds`<sup>Optional</sup> <a name="timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.timeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

##### `reset_args` <a name="reset_args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_deployment_timeout` <a name="reset_deployment_timeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```python
def reset_deployment_timeout() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_grpc_ports` <a name="reset_grpc_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```python
def reset_grpc_ports() -> None
```

##### `reset_health_probe` <a name="reset_health_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```python
def reset_health_probe() -> None
```

##### `reset_health_route` <a name="reset_health_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```python
def reset_health_route() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_predict_route` <a name="reset_predict_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```python
def reset_predict_route() -> None
```

##### `reset_shared_memory_size_mb` <a name="reset_shared_memory_size_mb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```python
def reset_shared_memory_size_mb() -> None
```

##### `reset_startup_probe` <a name="reset_startup_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```python
def reset_startup_probe() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList">VertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">grpc_ports</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">health_probe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">deployment_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">env_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">grpc_ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">health_probe_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">health_route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">predict_route_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">shared_memory_size_mb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">startup_probe_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">deployment_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">health_route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">predict_route</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">shared_memory_size_mb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```python
env: VertexAiTrainingPipelineModelToUploadContainerSpecEnvList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList">VertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `grpc_ports`<sup>Required</sup> <a name="grpc_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```python
grpc_ports: VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `health_probe`<sup>Required</sup> <a name="health_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```python
health_probe: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```python
ports: VertexAiTrainingPipelineModelToUploadContainerSpecPortsList
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `startup_probe`<sup>Required</sup> <a name="startup_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```python
startup_probe: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_timeout_input`<sup>Optional</sup> <a name="deployment_timeout_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```python
deployment_timeout_input: str
```

- *Type:* str

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```python
env_input: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecEnv]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

---

##### `grpc_ports_input`<sup>Optional</sup> <a name="grpc_ports_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```python
grpc_ports_input: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

---

##### `health_probe_input`<sup>Optional</sup> <a name="health_probe_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```python
health_probe_input: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `health_route_input`<sup>Optional</sup> <a name="health_route_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```python
health_route_input: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```python
ports_input: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

---

##### `predict_route_input`<sup>Optional</sup> <a name="predict_route_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```python
predict_route_input: str
```

- *Type:* str

---

##### `shared_memory_size_mb_input`<sup>Optional</sup> <a name="shared_memory_size_mb_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```python
shared_memory_size_mb_input: str
```

- *Type:* str

---

##### `startup_probe_input`<sup>Optional</sup> <a name="startup_probe_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```python
startup_probe_input: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deployment_timeout`<sup>Required</sup> <a name="deployment_timeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```python
deployment_timeout: str
```

- *Type:* str

---

##### `health_route`<sup>Required</sup> <a name="health_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```python
health_route: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `predict_route`<sup>Required</sup> <a name="predict_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```python
predict_route: str
```

- *Type:* str

---

##### `shared_memory_size_mb`<sup>Required</sup> <a name="shared_memory_size_mb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```python
shared_memory_size_mb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

---


### VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">container_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">container_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_port_input`<sup>Optional</sup> <a name="container_port_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```python
container_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `container_port`<sup>Required</sup> <a name="container_port" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```python
container_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiTrainingPipelineModelToUploadContainerSpecPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">reset_command</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">put_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">reset_exec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">reset_period_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">reset_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_exec` <a name="put_exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```python
def put_exec(
  command: typing.List[str] = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.command"></a>

- *Type:* typing.List[str]

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

##### `reset_exec` <a name="reset_exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```python
def reset_exec() -> None
```

##### `reset_period_seconds` <a name="reset_period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```python
def reset_period_seconds() -> None
```

##### `reset_timeout_seconds` <a name="reset_timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```python
def reset_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">exec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">period_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```python
exec: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `exec_input`<sup>Optional</sup> <a name="exec_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```python
exec_input: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `period_seconds_input`<sup>Optional</sup> <a name="period_seconds_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```python
period_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds_input`<sup>Optional</sup> <a name="timeout_seconds_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```python
timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_seconds`<sup>Required</sup> <a name="period_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```python
period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```python
parameters_input: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### VertexAiTrainingPipelineModelToUploadOutputReference <a name="VertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">put_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">put_explanation_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">reset_artifact_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">reset_container_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">reset_explanation_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">reset_version_aliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">reset_version_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_container_spec` <a name="put_container_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```python
def put_container_spec(
  image_uri: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  deployment_timeout: str = None,
  env: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecEnv] = None,
  grpc_ports: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts] = None,
  health_probe: VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe = None,
  health_route: str = None,
  ports: IResolvable | typing.List[VertexAiTrainingPipelineModelToUploadContainerSpecPorts] = None,
  predict_route: str = None,
  shared_memory_size_mb: str = None,
  startup_probe: VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe = None
) -> None
```

###### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.imageUri"></a>

- *Type:* str

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#image_uri VertexAiTrainingPipeline#image_uri}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.args"></a>

- *Type:* typing.List[str]

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#args VertexAiTrainingPipeline#args}

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.command"></a>

- *Type:* typing.List[str]

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

###### `deployment_timeout`<sup>Optional</sup> <a name="deployment_timeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.deploymentTimeout"></a>

- *Type:* str

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deployment_timeout VertexAiTrainingPipeline#deployment_timeout}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.env"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#env VertexAiTrainingPipeline#env}

---

###### `grpc_ports`<sup>Optional</sup> <a name="grpc_ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.grpcPorts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>]

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#grpc_ports VertexAiTrainingPipeline#grpc_ports}

---

###### `health_probe`<sup>Optional</sup> <a name="health_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.healthProbe"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_probe VertexAiTrainingPipeline#health_probe}

---

###### `health_route`<sup>Optional</sup> <a name="health_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.healthRoute"></a>

- *Type:* str

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_route VertexAiTrainingPipeline#health_route}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.ports"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>]

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#ports VertexAiTrainingPipeline#ports}

---

###### `predict_route`<sup>Optional</sup> <a name="predict_route" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.predictRoute"></a>

- *Type:* str

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predict_route VertexAiTrainingPipeline#predict_route}

---

###### `shared_memory_size_mb`<sup>Optional</sup> <a name="shared_memory_size_mb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.sharedMemorySizeMb"></a>

- *Type:* str

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#shared_memory_size_mb VertexAiTrainingPipeline#shared_memory_size_mb}

---

###### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.startupProbe"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#startup_probe VertexAiTrainingPipeline#startup_probe}

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

##### `put_explanation_spec` <a name="put_explanation_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```python
def put_explanation_spec(
  metadata: str = None,
  parameters: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.metadata"></a>

- *Type:* str

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#metadata VertexAiTrainingPipeline#metadata}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.parameters"></a>

- *Type:* str

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parameters VertexAiTrainingPipeline#parameters}

---

##### `reset_artifact_uri` <a name="reset_artifact_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```python
def reset_artifact_uri() -> None
```

##### `reset_container_spec` <a name="reset_container_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```python
def reset_container_spec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_explanation_spec` <a name="reset_explanation_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```python
def reset_explanation_spec() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_version_aliases` <a name="reset_version_aliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```python
def reset_version_aliases() -> None
```

##### `reset_version_description` <a name="reset_version_description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```python
def reset_version_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">container_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">explanation_spec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">artifact_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">container_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">explanation_spec_input</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">version_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">version_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">artifact_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">version_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_spec`<sup>Required</sup> <a name="container_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```python
container_spec: VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```python
encryption_spec: VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `explanation_spec`<sup>Required</sup> <a name="explanation_spec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```python
explanation_spec: VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `artifact_uri_input`<sup>Optional</sup> <a name="artifact_uri_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```python
artifact_uri_input: str
```

- *Type:* str

---

##### `container_spec_input`<sup>Optional</sup> <a name="container_spec_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```python
container_spec_input: VertexAiTrainingPipelineModelToUploadContainerSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```python
encryption_spec_input: VertexAiTrainingPipelineModelToUploadEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `explanation_spec_input`<sup>Optional</sup> <a name="explanation_spec_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```python
explanation_spec_input: VertexAiTrainingPipelineModelToUploadExplanationSpec
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_aliases_input`<sup>Optional</sup> <a name="version_aliases_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```python
version_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_description_input`<sup>Optional</sup> <a name="version_description_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```python
version_description_input: str
```

- *Type:* str

---

##### `artifact_uri`<sup>Required</sup> <a name="artifact_uri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```python
artifact_uri: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version_aliases`<sup>Required</sup> <a name="version_aliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```python
version_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```python
internal_value: VertexAiTrainingPipelineModelToUpload
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---


### VertexAiTrainingPipelineTimeoutsOutputReference <a name="VertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vertex_ai_training_pipeline

vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VertexAiTrainingPipelineTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---



