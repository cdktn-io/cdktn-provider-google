# `vertexAiTrainingPipeline` Submodule <a name="`vertexAiTrainingPipeline` Submodule" id="@cdktn/provider-google.vertexAiTrainingPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiTrainingPipeline <a name="VertexAiTrainingPipeline" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline google_vertex_ai_training_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipeline;

VertexAiTrainingPipeline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .modelId(java.lang.String)
    .trainingTaskDefinition(java.lang.String)
    .trainingTaskInputs(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .encryptionSpec(VertexAiTrainingPipelineEncryptionSpec)
//  .id(java.lang.String)
//  .inputDataConfig(VertexAiTrainingPipelineInputDataConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .modelToUpload(VertexAiTrainingPipelineModelToUpload)
//  .parentModel(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiTrainingPipelineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelId">modelId</a></code> | <code>java.lang.String</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition">trainingTaskDefinition</a></code> | <code>java.lang.String</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs">trainingTaskInputs</a></code> | <code>java.lang.String</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelToUpload">modelToUpload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.parentModel">parentModel</a></code> | <code>java.lang.String</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelId"></a>

- *Type:* java.lang.String

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_id VertexAiTrainingPipeline#model_id}

---

##### `trainingTaskDefinition`<sup>Required</sup> <a name="trainingTaskDefinition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskDefinition"></a>

- *Type:* java.lang.String

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_definition VertexAiTrainingPipeline#training_task_definition}

---

##### `trainingTaskInputs`<sup>Required</sup> <a name="trainingTaskInputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.trainingTaskInputs"></a>

- *Type:* java.lang.String

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_inputs VertexAiTrainingPipeline#training_task_inputs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deletion_policy VertexAiTrainingPipeline#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.inputDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#input_data_config VertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `modelToUpload`<sup>Optional</sup> <a name="modelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.modelToUpload"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_to_upload VertexAiTrainingPipeline#model_to_upload}

---

##### `parentModel`<sup>Optional</sup> <a name="parentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.parentModel"></a>

- *Type:* java.lang.String

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parent_model VertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.Initializer.parameter.region"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig">putInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload">putModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetInputDataConfig">resetInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetModelToUpload">resetModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetParentModel">resetParentModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiTrainingPipelineEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---

##### `putInputDataConfig` <a name="putInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig"></a>

```java
public void putInputDataConfig(VertexAiTrainingPipelineInputDataConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---

##### `putModelToUpload` <a name="putModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload"></a>

```java
public void putModelToUpload(VertexAiTrainingPipelineModelToUpload value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putModelToUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts"></a>

```java
public void putTimeouts(VertexAiTrainingPipelineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetId"></a>

```java
public void resetId()
```

##### `resetInputDataConfig` <a name="resetInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetInputDataConfig"></a>

```java
public void resetInputDataConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetModelToUpload` <a name="resetModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetModelToUpload"></a>

```java
public void resetModelToUpload()
```

##### `resetParentModel` <a name="resetParentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetParentModel"></a>

```java
public void resetParentModel()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipeline;

VertexAiTrainingPipeline.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipeline;

VertexAiTrainingPipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipeline;

VertexAiTrainingPipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipeline;

VertexAiTrainingPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiTrainingPipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiTrainingPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiTrainingPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiTrainingPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiTrainingPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference">VertexAiTrainingPipelineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList">VertexAiTrainingPipelineErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference">VertexAiTrainingPipelineInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUpload">modelToUpload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference">VertexAiTrainingPipelineModelToUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference">VertexAiTrainingPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskMetadata">trainingTaskMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfigInput">inputDataConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUploadInput">modelToUploadInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModelInput">parentModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinitionInput">trainingTaskDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputsInput">trainingTaskInputsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModel">parentModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinition">trainingTaskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputs">trainingTaskInputs</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpec"></a>

```java
public VertexAiTrainingPipelineEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference">VertexAiTrainingPipelineEncryptionSpecOutputReference</a>

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.error"></a>

```java
public VertexAiTrainingPipelineErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList">VertexAiTrainingPipelineErrorList</a>

---

##### `inputDataConfig`<sup>Required</sup> <a name="inputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfig"></a>

```java
public VertexAiTrainingPipelineInputDataConfigOutputReference getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference">VertexAiTrainingPipelineInputDataConfigOutputReference</a>

---

##### `modelToUpload`<sup>Required</sup> <a name="modelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUpload"></a>

```java
public VertexAiTrainingPipelineModelToUploadOutputReference getModelToUpload();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference">VertexAiTrainingPipelineModelToUploadOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeouts"></a>

```java
public VertexAiTrainingPipelineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference">VertexAiTrainingPipelineTimeoutsOutputReference</a>

---

##### `trainingTaskMetadata`<sup>Required</sup> <a name="trainingTaskMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskMetadata"></a>

```java
public java.lang.String getTrainingTaskMetadata();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.encryptionSpecInput"></a>

```java
public VertexAiTrainingPipelineEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputDataConfigInput`<sup>Optional</sup> <a name="inputDataConfigInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.inputDataConfigInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfig getInputDataConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `modelToUploadInput`<sup>Optional</sup> <a name="modelToUploadInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelToUploadInput"></a>

```java
public VertexAiTrainingPipelineModelToUpload getModelToUploadInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---

##### `parentModelInput`<sup>Optional</sup> <a name="parentModelInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModelInput"></a>

```java
public java.lang.String getParentModelInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiTrainingPipelineTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---

##### `trainingTaskDefinitionInput`<sup>Optional</sup> <a name="trainingTaskDefinitionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinitionInput"></a>

```java
public java.lang.String getTrainingTaskDefinitionInput();
```

- *Type:* java.lang.String

---

##### `trainingTaskInputsInput`<sup>Optional</sup> <a name="trainingTaskInputsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputsInput"></a>

```java
public java.lang.String getTrainingTaskInputsInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `parentModel`<sup>Required</sup> <a name="parentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.parentModel"></a>

```java
public java.lang.String getParentModel();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `trainingTaskDefinition`<sup>Required</sup> <a name="trainingTaskDefinition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskDefinition"></a>

```java
public java.lang.String getTrainingTaskDefinition();
```

- *Type:* java.lang.String

---

##### `trainingTaskInputs`<sup>Required</sup> <a name="trainingTaskInputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.trainingTaskInputs"></a>

```java
public java.lang.String getTrainingTaskInputs();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiTrainingPipelineConfig <a name="VertexAiTrainingPipelineConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineConfig;

VertexAiTrainingPipelineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .modelId(java.lang.String)
    .trainingTaskDefinition(java.lang.String)
    .trainingTaskInputs(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .encryptionSpec(VertexAiTrainingPipelineEncryptionSpec)
//  .id(java.lang.String)
//  .inputDataConfig(VertexAiTrainingPipelineInputDataConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .modelToUpload(VertexAiTrainingPipelineModelToUpload)
//  .parentModel(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiTrainingPipelineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of this TrainingPipeline. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | The ID to use for the uploaded Model, which will become the final component of the model resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskDefinition">trainingTaskDefinition</a></code> | <code>java.lang.String</code> | A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskInputs">trainingTaskInputs</a></code> | <code>java.lang.String</code> | The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.inputDataConfig">inputDataConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | input_data_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize TrainingPipelines. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelToUpload">modelToUpload</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | model_to_upload block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.parentModel">parentModel</a></code> | <code>java.lang.String</code> | When specified, the model_to_upload will become a new version of this parent_model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the training pipeline. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of this TrainingPipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

The ID to use for the uploaded Model, which will become the final component of the model resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_id VertexAiTrainingPipeline#model_id}

---

##### `trainingTaskDefinition`<sup>Required</sup> <a name="trainingTaskDefinition" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskDefinition"></a>

```java
public java.lang.String getTrainingTaskDefinition();
```

- *Type:* java.lang.String

A Google Cloud Storage path to the YAML file that defines the training task which is responsible for producing the model artifact, and may also include additional auxiliary work.

The definition files that can be used here are found in gs://google-cloud-aiplatform/schema/trainingjob/definition/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_definition VertexAiTrainingPipeline#training_task_definition}

---

##### `trainingTaskInputs`<sup>Required</sup> <a name="trainingTaskInputs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.trainingTaskInputs"></a>

```java
public java.lang.String getTrainingTaskInputs();
```

- *Type:* java.lang.String

The training task's parameter(s), as specified in the training_task_definition's inputs. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_task_inputs VertexAiTrainingPipeline#training_task_inputs}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deletion_policy VertexAiTrainingPipeline#deletion_policy}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.encryptionSpec"></a>

```java
public VertexAiTrainingPipelineEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#id VertexAiTrainingPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputDataConfig`<sup>Optional</sup> <a name="inputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.inputDataConfig"></a>

```java
public VertexAiTrainingPipelineInputDataConfig getInputDataConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

input_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#input_data_config VertexAiTrainingPipeline#input_data_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize TrainingPipelines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `modelToUpload`<sup>Optional</sup> <a name="modelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.modelToUpload"></a>

```java
public VertexAiTrainingPipelineModelToUpload getModelToUpload();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

model_to_upload block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#model_to_upload VertexAiTrainingPipeline#model_to_upload}

---

##### `parentModel`<sup>Optional</sup> <a name="parentModel" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.parentModel"></a>

```java
public java.lang.String getParentModel();
```

- *Type:* java.lang.String

When specified, the model_to_upload will become a new version of this parent_model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parent_model VertexAiTrainingPipeline#parent_model}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#project VertexAiTrainingPipeline#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the training pipeline. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#region VertexAiTrainingPipeline#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineConfig.property.timeouts"></a>

```java
public VertexAiTrainingPipelineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeouts VertexAiTrainingPipeline#timeouts}

---

### VertexAiTrainingPipelineEncryptionSpec <a name="VertexAiTrainingPipelineEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineEncryptionSpec;

VertexAiTrainingPipelineEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the training pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

### VertexAiTrainingPipelineError <a name="VertexAiTrainingPipelineError" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineError;

VertexAiTrainingPipelineError.builder()
    .build();
```


### VertexAiTrainingPipelineInputDataConfig <a name="VertexAiTrainingPipelineInputDataConfig" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfig;

VertexAiTrainingPipelineInputDataConfig.builder()
    .datasetId(java.lang.String)
//  .annotationSchemaUri(java.lang.String)
//  .annotationsFilter(java.lang.String)
//  .bigqueryDestination(VertexAiTrainingPipelineInputDataConfigBigqueryDestination)
//  .filterSplit(VertexAiTrainingPipelineInputDataConfigFilterSplit)
//  .fractionSplit(VertexAiTrainingPipelineInputDataConfigFractionSplit)
//  .gcsDestination(VertexAiTrainingPipelineInputDataConfigGcsDestination)
//  .persistMlUseAssignment(java.lang.Boolean|IResolvable)
//  .predefinedSplit(VertexAiTrainingPipelineInputDataConfigPredefinedSplit)
//  .savedQueryId(java.lang.String)
//  .stratifiedSplit(VertexAiTrainingPipelineInputDataConfigStratifiedSplit)
//  .timestampSplit(VertexAiTrainingPipelineInputDataConfigTimestampSplit)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | The ID of the Dataset in the same Project and Location which data will be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri">annotationSchemaUri</a></code> | <code>java.lang.String</code> | Applicable only to custom training with Datasets that have DataItems and Annotations. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationsFilter">annotationsFilter</a></code> | <code>java.lang.String</code> | Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | bigquery_destination block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.filterSplit">filterSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | filter_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.fractionSplit">fractionSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | fraction_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.gcsDestination">gcsDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | gcs_destination block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment">persistMlUseAssignment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to persist the ML use assignment to data item system labels. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.predefinedSplit">predefinedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | predefined_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.savedQueryId">savedQueryId</a></code> | <code>java.lang.String</code> | Only applicable to Datasets that have SavedQueries. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit">stratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | stratified_split block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.timestampSplit">timestampSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | timestamp_split block. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

The ID of the Dataset in the same Project and Location which data will be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#dataset_id VertexAiTrainingPipeline#dataset_id}

---

##### `annotationSchemaUri`<sup>Optional</sup> <a name="annotationSchemaUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationSchemaUri"></a>

```java
public java.lang.String getAnnotationSchemaUri();
```

- *Type:* java.lang.String

Applicable only to custom training with Datasets that have DataItems and Annotations.

Cloud Storage URI that points to a YAML file describing the annotation schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotation_schema_uri VertexAiTrainingPipeline#annotation_schema_uri}

---

##### `annotationsFilter`<sup>Optional</sup> <a name="annotationsFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.annotationsFilter"></a>

```java
public java.lang.String getAnnotationsFilter();
```

- *Type:* java.lang.String

Applicable only to Datasets that have DataItems and Annotations. A filter on Annotations of the Dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#annotations_filter VertexAiTrainingPipeline#annotations_filter}

---

##### `bigqueryDestination`<sup>Optional</sup> <a name="bigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.bigqueryDestination"></a>

```java
public VertexAiTrainingPipelineInputDataConfigBigqueryDestination getBigqueryDestination();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

bigquery_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#bigquery_destination VertexAiTrainingPipeline#bigquery_destination}

---

##### `filterSplit`<sup>Optional</sup> <a name="filterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.filterSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFilterSplit getFilterSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

filter_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#filter_split VertexAiTrainingPipeline#filter_split}

---

##### `fractionSplit`<sup>Optional</sup> <a name="fractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.fractionSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFractionSplit getFractionSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

fraction_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#fraction_split VertexAiTrainingPipeline#fraction_split}

---

##### `gcsDestination`<sup>Optional</sup> <a name="gcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.gcsDestination"></a>

```java
public VertexAiTrainingPipelineInputDataConfigGcsDestination getGcsDestination();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#gcs_destination VertexAiTrainingPipeline#gcs_destination}

---

##### `persistMlUseAssignment`<sup>Optional</sup> <a name="persistMlUseAssignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.persistMlUseAssignment"></a>

```java
public java.lang.Boolean|IResolvable getPersistMlUseAssignment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to persist the ML use assignment to data item system labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#persist_ml_use_assignment VertexAiTrainingPipeline#persist_ml_use_assignment}

---

##### `predefinedSplit`<sup>Optional</sup> <a name="predefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.predefinedSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigPredefinedSplit getPredefinedSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

predefined_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predefined_split VertexAiTrainingPipeline#predefined_split}

---

##### `savedQueryId`<sup>Optional</sup> <a name="savedQueryId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.savedQueryId"></a>

```java
public java.lang.String getSavedQueryId();
```

- *Type:* java.lang.String

Only applicable to Datasets that have SavedQueries.

The ID of a SavedQuery under the Dataset specified by dataset_id used for filtering Annotations for training.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#saved_query_id VertexAiTrainingPipeline#saved_query_id}

---

##### `stratifiedSplit`<sup>Optional</sup> <a name="stratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.stratifiedSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigStratifiedSplit getStratifiedSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

stratified_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#stratified_split VertexAiTrainingPipeline#stratified_split}

---

##### `timestampSplit`<sup>Optional</sup> <a name="timestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig.property.timestampSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigTimestampSplit getTimestampSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

timestamp_split block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timestamp_split VertexAiTrainingPipeline#timestamp_split}

---

### VertexAiTrainingPipelineInputDataConfigBigqueryDestination <a name="VertexAiTrainingPipelineInputDataConfigBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination;

VertexAiTrainingPipelineInputDataConfigBigqueryDestination.builder()
    .outputUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | The BigQuery table to which the output is to be written. |

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

The BigQuery table to which the output is to be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri VertexAiTrainingPipeline#output_uri}

---

### VertexAiTrainingPipelineInputDataConfigFilterSplit <a name="VertexAiTrainingPipelineInputDataConfigFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit;

VertexAiTrainingPipelineInputDataConfigFilterSplit.builder()
    .testFilter(java.lang.String)
    .trainingFilter(java.lang.String)
    .validationFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter">testFilter</a></code> | <code>java.lang.String</code> | A filter on DataItems of the Dataset for test set. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter">trainingFilter</a></code> | <code>java.lang.String</code> | A filter on DataItems of the Dataset for training set. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter">validationFilter</a></code> | <code>java.lang.String</code> | A filter on DataItems of the Dataset for validation set. |

---

##### `testFilter`<sup>Required</sup> <a name="testFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.testFilter"></a>

```java
public java.lang.String getTestFilter();
```

- *Type:* java.lang.String

A filter on DataItems of the Dataset for test set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_filter VertexAiTrainingPipeline#test_filter}

---

##### `trainingFilter`<sup>Required</sup> <a name="trainingFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.trainingFilter"></a>

```java
public java.lang.String getTrainingFilter();
```

- *Type:* java.lang.String

A filter on DataItems of the Dataset for training set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_filter VertexAiTrainingPipeline#training_filter}

---

##### `validationFilter`<sup>Required</sup> <a name="validationFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit.property.validationFilter"></a>

```java
public java.lang.String getValidationFilter();
```

- *Type:* java.lang.String

A filter on DataItems of the Dataset for validation set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_filter VertexAiTrainingPipeline#validation_filter}

---

### VertexAiTrainingPipelineInputDataConfigFractionSplit <a name="VertexAiTrainingPipelineInputDataConfigFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit;

VertexAiTrainingPipelineInputDataConfigFractionSplit.builder()
//  .testFraction(java.lang.Number)
//  .trainingFraction(java.lang.Number)
//  .validationFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `testFraction`<sup>Optional</sup> <a name="testFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `trainingFraction`<sup>Optional</sup> <a name="trainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `validationFraction`<sup>Optional</sup> <a name="validationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineInputDataConfigGcsDestination <a name="VertexAiTrainingPipelineInputDataConfigGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination;

VertexAiTrainingPipelineInputDataConfigGcsDestination.builder()
    .outputUriPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix">outputUriPrefix</a></code> | <code>java.lang.String</code> | The Cloud Storage URI prefix to write to. |

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination.property.outputUriPrefix"></a>

```java
public java.lang.String getOutputUriPrefix();
```

- *Type:* java.lang.String

The Cloud Storage URI prefix to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#output_uri_prefix VertexAiTrainingPipeline#output_uri_prefix}

---

### VertexAiTrainingPipelineInputDataConfigPredefinedSplit <a name="VertexAiTrainingPipelineInputDataConfigPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit;

VertexAiTrainingPipelineInputDataConfigPredefinedSplit.builder()
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key">key</a></code> | <code>java.lang.String</code> | The key is a name of one of the Dataset's data columns. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

### VertexAiTrainingPipelineInputDataConfigStratifiedSplit <a name="VertexAiTrainingPipelineInputDataConfigStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit;

VertexAiTrainingPipelineInputDataConfigStratifiedSplit.builder()
    .key(java.lang.String)
//  .testFraction(java.lang.Number)
//  .trainingFraction(java.lang.Number)
//  .validationFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key">key</a></code> | <code>java.lang.String</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `testFraction`<sup>Optional</sup> <a name="testFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `trainingFraction`<sup>Optional</sup> <a name="trainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `validationFraction`<sup>Optional</sup> <a name="validationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineInputDataConfigTimestampSplit <a name="VertexAiTrainingPipelineInputDataConfigTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit;

VertexAiTrainingPipelineInputDataConfigTimestampSplit.builder()
    .key(java.lang.String)
//  .testFraction(java.lang.Number)
//  .trainingFraction(java.lang.Number)
//  .validationFraction(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key">key</a></code> | <code>java.lang.String</code> | The key is a name of one of the Dataset's data columns. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to evaluate the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to train the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | The fraction of the input data that is to be used to validate the Model. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key is a name of one of the Dataset's data columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#key VertexAiTrainingPipeline#key}

---

##### `testFraction`<sup>Optional</sup> <a name="testFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to evaluate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#test_fraction VertexAiTrainingPipeline#test_fraction}

---

##### `trainingFraction`<sup>Optional</sup> <a name="trainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to train the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#training_fraction VertexAiTrainingPipeline#training_fraction}

---

##### `validationFraction`<sup>Optional</sup> <a name="validationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

The fraction of the input data that is to be used to validate the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#validation_fraction VertexAiTrainingPipeline#validation_fraction}

---

### VertexAiTrainingPipelineModelToUpload <a name="VertexAiTrainingPipelineModelToUpload" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUpload;

VertexAiTrainingPipelineModelToUpload.builder()
    .displayName(java.lang.String)
//  .artifactUri(java.lang.String)
//  .containerSpec(VertexAiTrainingPipelineModelToUploadContainerSpec)
//  .description(java.lang.String)
//  .encryptionSpec(VertexAiTrainingPipelineModelToUploadEncryptionSpec)
//  .explanationSpec(VertexAiTrainingPipelineModelToUploadExplanationSpec)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .versionAliases(java.util.List<java.lang.String>)
//  .versionDescription(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.artifactUri">artifactUri</a></code> | <code>java.lang.String</code> | The path to the directory containing the Model artifact and any of its supporting files. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Model. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.explanationSpec">explanationSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | explanation_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your Models. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionAliases">versionAliases</a></code> | <code>java.util.List<java.lang.String></code> | User provided version aliases so that a model version can be referenced using alias. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | The description of this version. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#display_name VertexAiTrainingPipeline#display_name}

---

##### `artifactUri`<sup>Optional</sup> <a name="artifactUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.artifactUri"></a>

```java
public java.lang.String getArtifactUri();
```

- *Type:* java.lang.String

The path to the directory containing the Model artifact and any of its supporting files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#artifact_uri VertexAiTrainingPipeline#artifact_uri}

---

##### `containerSpec`<sup>Optional</sup> <a name="containerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.containerSpec"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpec getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_spec VertexAiTrainingPipeline#container_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#description VertexAiTrainingPipeline#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.encryptionSpec"></a>

```java
public VertexAiTrainingPipelineModelToUploadEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#encryption_spec VertexAiTrainingPipeline#encryption_spec}

---

##### `explanationSpec`<sup>Optional</sup> <a name="explanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.explanationSpec"></a>

```java
public VertexAiTrainingPipelineModelToUploadExplanationSpec getExplanationSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

explanation_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#explanation_spec VertexAiTrainingPipeline#explanation_spec}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your Models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#labels VertexAiTrainingPipeline#labels}

---

##### `versionAliases`<sup>Optional</sup> <a name="versionAliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionAliases"></a>

```java
public java.util.List<java.lang.String> getVersionAliases();
```

- *Type:* java.util.List<java.lang.String>

User provided version aliases so that a model version can be referenced using alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_aliases VertexAiTrainingPipeline#version_aliases}

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

The description of this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#version_description VertexAiTrainingPipeline#version_description}

---

### VertexAiTrainingPipelineModelToUploadContainerSpec <a name="VertexAiTrainingPipelineModelToUploadContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpec;

VertexAiTrainingPipelineModelToUploadContainerSpec.builder()
    .imageUri(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .command(java.util.List<java.lang.String>)
//  .deploymentTimeout(java.lang.String)
//  .env(IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecEnv>)
//  .grpcPorts(IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts>)
//  .healthProbe(VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe)
//  .healthRoute(java.lang.String)
//  .ports(IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecPorts>)
//  .predictRoute(java.lang.String)
//  .sharedMemorySizeMb(java.lang.String)
//  .startupProbe(VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | URI of the Docker image to be used as the custom container for serving predictions. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the arguments to the command when the container starts. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the command that runs when the container starts. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout">deploymentTimeout</a></code> | <code>java.lang.String</code> | Deployment timeout. Limit for deployment timeout is 2 hours. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>></code> | env block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts">grpcPorts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>></code> | grpc_ports block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | health_probe block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute">healthRoute</a></code> | <code>java.lang.String</code> | HTTP path on the container to send health checks to. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.ports">ports</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>></code> | ports block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute">predictRoute</a></code> | <code>java.lang.String</code> | HTTP path on the container to send prediction requests to. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb">sharedMemorySizeMb</a></code> | <code>java.lang.String</code> | The amount of the VM memory to reserve as the shared memory for the model in megabytes. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | startup_probe block. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

URI of the Docker image to be used as the custom container for serving predictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#image_uri VertexAiTrainingPipeline#image_uri}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the arguments to the command when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#args VertexAiTrainingPipeline#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Specifies the command that runs when the container starts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

##### `deploymentTimeout`<sup>Optional</sup> <a name="deploymentTimeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.deploymentTimeout"></a>

```java
public java.lang.String getDeploymentTimeout();
```

- *Type:* java.lang.String

Deployment timeout. Limit for deployment timeout is 2 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#deployment_timeout VertexAiTrainingPipeline#deployment_timeout}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.env"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#env VertexAiTrainingPipeline#env}

---

##### `grpcPorts`<sup>Optional</sup> <a name="grpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.grpcPorts"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> getGrpcPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

grpc_ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#grpc_ports VertexAiTrainingPipeline#grpc_ports}

---

##### `healthProbe`<sup>Optional</sup> <a name="healthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthProbe"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe getHealthProbe();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

health_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_probe VertexAiTrainingPipeline#health_probe}

---

##### `healthRoute`<sup>Optional</sup> <a name="healthRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.healthRoute"></a>

```java
public java.lang.String getHealthRoute();
```

- *Type:* java.lang.String

HTTP path on the container to send health checks to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#health_route VertexAiTrainingPipeline#health_route}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.ports"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecPorts> getPorts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#ports VertexAiTrainingPipeline#ports}

---

##### `predictRoute`<sup>Optional</sup> <a name="predictRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.predictRoute"></a>

```java
public java.lang.String getPredictRoute();
```

- *Type:* java.lang.String

HTTP path on the container to send prediction requests to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#predict_route VertexAiTrainingPipeline#predict_route}

---

##### `sharedMemorySizeMb`<sup>Optional</sup> <a name="sharedMemorySizeMb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.sharedMemorySizeMb"></a>

```java
public java.lang.String getSharedMemorySizeMb();
```

- *Type:* java.lang.String

The amount of the VM memory to reserve as the shared memory for the model in megabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#shared_memory_size_mb VertexAiTrainingPipeline#shared_memory_size_mb}

---

##### `startupProbe`<sup>Optional</sup> <a name="startupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec.property.startupProbe"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#startup_probe VertexAiTrainingPipeline#startup_probe}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecEnv <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv;

VertexAiTrainingPipelineModelToUploadContainerSpecEnv.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value">value</a></code> | <code>java.lang.String</code> | The value of the environment variable. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#name VertexAiTrainingPipeline#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#value VertexAiTrainingPipeline#value}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts;

VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.builder()
    .containerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | The number of the port on the container. |

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe;

VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.builder()
//  .exec(VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec)
//  .periodSeconds(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.exec"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec getExec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec;

VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.builder()
//  .command(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecPorts <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts;

VertexAiTrainingPipelineModelToUploadContainerSpecPorts.builder()
    .containerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | The number of the port on the container. |

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

The number of the port on the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#container_port VertexAiTrainingPipeline#container_port}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe;

VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.builder()
//  .exec(VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec)
//  .periodSeconds(java.lang.Number)
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | exec block. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | How often (in seconds) to perform the probe. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds after which the probe times out. |

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.exec"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec getExec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#exec VertexAiTrainingPipeline#exec}

---

##### `periodSeconds`<sup>Optional</sup> <a name="periodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

How often (in seconds) to perform the probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#period_seconds VertexAiTrainingPipeline#period_seconds}

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Number of seconds after which the probe times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#timeout_seconds VertexAiTrainingPipeline#timeout_seconds}

---

### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec;

VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.builder()
//  .command(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Command is the command line to execute inside the container. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Command is the command line to execute inside the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#command VertexAiTrainingPipeline#command}

---

### VertexAiTrainingPipelineModelToUploadEncryptionSpec <a name="VertexAiTrainingPipelineModelToUploadEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec;

VertexAiTrainingPipelineModelToUploadEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS resource identifier of the customer-managed encryption key used to protect the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#kms_key_name VertexAiTrainingPipeline#kms_key_name}

---

### VertexAiTrainingPipelineModelToUploadExplanationSpec <a name="VertexAiTrainingPipelineModelToUploadExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec;

VertexAiTrainingPipelineModelToUploadExplanationSpec.builder()
//  .metadata(java.lang.String)
//  .parameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata">metadata</a></code> | <code>java.lang.String</code> | Metadata describing the Model's input and output for explanation. This field uses JSON data as a string. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

Metadata describing the Model's input and output for explanation. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#metadata VertexAiTrainingPipeline#metadata}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Parameters that configure explaining of the Model's predictions. This field uses JSON data as a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#parameters VertexAiTrainingPipeline#parameters}

---

### VertexAiTrainingPipelineTimeouts <a name="VertexAiTrainingPipelineTimeouts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineTimeouts;

VertexAiTrainingPipelineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#create VertexAiTrainingPipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#delete VertexAiTrainingPipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/vertex_ai_training_pipeline#update VertexAiTrainingPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiTrainingPipelineEncryptionSpecOutputReference <a name="VertexAiTrainingPipelineEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference;

new VertexAiTrainingPipelineEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineEncryptionSpec">VertexAiTrainingPipelineEncryptionSpec</a>

---


### VertexAiTrainingPipelineErrorList <a name="VertexAiTrainingPipelineErrorList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineErrorList;

new VertexAiTrainingPipelineErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get"></a>

```java
public VertexAiTrainingPipelineErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiTrainingPipelineErrorOutputReference <a name="VertexAiTrainingPipelineErrorOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineErrorOutputReference;

new VertexAiTrainingPipelineErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError">VertexAiTrainingPipelineError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineErrorOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineError">VertexAiTrainingPipelineError</a>

---


### VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference <a name="VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference;

new VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput">outputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri">outputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputUriInput`<sup>Optional</sup> <a name="outputUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUriInput"></a>

```java
public java.lang.String getOutputUriInput();
```

- *Type:* java.lang.String

---

##### `outputUri`<sup>Required</sup> <a name="outputUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.outputUri"></a>

```java
public java.lang.String getOutputUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigBigqueryDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---


### VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference;

new VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput">testFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput">trainingFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput">validationFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter">testFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter">trainingFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter">validationFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testFilterInput`<sup>Optional</sup> <a name="testFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilterInput"></a>

```java
public java.lang.String getTestFilterInput();
```

- *Type:* java.lang.String

---

##### `trainingFilterInput`<sup>Optional</sup> <a name="trainingFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilterInput"></a>

```java
public java.lang.String getTrainingFilterInput();
```

- *Type:* java.lang.String

---

##### `validationFilterInput`<sup>Optional</sup> <a name="validationFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilterInput"></a>

```java
public java.lang.String getValidationFilterInput();
```

- *Type:* java.lang.String

---

##### `testFilter`<sup>Required</sup> <a name="testFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.testFilter"></a>

```java
public java.lang.String getTestFilter();
```

- *Type:* java.lang.String

---

##### `trainingFilter`<sup>Required</sup> <a name="trainingFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.trainingFilter"></a>

```java
public java.lang.String getTrainingFilter();
```

- *Type:* java.lang.String

---

##### `validationFilter`<sup>Required</sup> <a name="validationFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.validationFilter"></a>

```java
public java.lang.String getValidationFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFilterSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference;

new VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction">resetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction">resetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction">resetValidationFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestFraction` <a name="resetTestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTestFraction"></a>

```java
public void resetTestFraction()
```

##### `resetTrainingFraction` <a name="resetTrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetTrainingFraction"></a>

```java
public void resetTrainingFraction()
```

##### `resetValidationFraction` <a name="resetValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.resetValidationFraction"></a>

```java
public void resetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput">testFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput">trainingFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput">validationFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testFractionInput`<sup>Optional</sup> <a name="testFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFractionInput"></a>

```java
public java.lang.Number getTestFractionInput();
```

- *Type:* java.lang.Number

---

##### `trainingFractionInput`<sup>Optional</sup> <a name="trainingFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFractionInput"></a>

```java
public java.lang.Number getTrainingFractionInput();
```

- *Type:* java.lang.Number

---

##### `validationFractionInput`<sup>Optional</sup> <a name="validationFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFractionInput"></a>

```java
public java.lang.Number getValidationFractionInput();
```

- *Type:* java.lang.Number

---

##### `testFraction`<sup>Required</sup> <a name="testFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

---

##### `validationFraction`<sup>Required</sup> <a name="validationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFractionSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference <a name="VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference;

new VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput">outputUriPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix">outputUriPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputUriPrefixInput`<sup>Optional</sup> <a name="outputUriPrefixInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefixInput"></a>

```java
public java.lang.String getOutputUriPrefixInput();
```

- *Type:* java.lang.String

---

##### `outputUriPrefix`<sup>Required</sup> <a name="outputUriPrefix" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.outputUriPrefix"></a>

```java
public java.lang.String getOutputUriPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigGcsDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---


### VertexAiTrainingPipelineInputDataConfigOutputReference <a name="VertexAiTrainingPipelineInputDataConfigOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigOutputReference;

new VertexAiTrainingPipelineInputDataConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination">putBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit">putFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit">putFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination">putGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit">putPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit">putStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit">putTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri">resetAnnotationSchemaUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter">resetAnnotationsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination">resetBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit">resetFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit">resetFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination">resetGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment">resetPersistMlUseAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit">resetPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId">resetSavedQueryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit">resetStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit">resetTimestampSplit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigqueryDestination` <a name="putBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination"></a>

```java
public void putBigqueryDestination(VertexAiTrainingPipelineInputDataConfigBigqueryDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putBigqueryDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `putFilterSplit` <a name="putFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit"></a>

```java
public void putFilterSplit(VertexAiTrainingPipelineInputDataConfigFilterSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFilterSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `putFractionSplit` <a name="putFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit"></a>

```java
public void putFractionSplit(VertexAiTrainingPipelineInputDataConfigFractionSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putFractionSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `putGcsDestination` <a name="putGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination"></a>

```java
public void putGcsDestination(VertexAiTrainingPipelineInputDataConfigGcsDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `putPredefinedSplit` <a name="putPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit"></a>

```java
public void putPredefinedSplit(VertexAiTrainingPipelineInputDataConfigPredefinedSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putPredefinedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `putStratifiedSplit` <a name="putStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit"></a>

```java
public void putStratifiedSplit(VertexAiTrainingPipelineInputDataConfigStratifiedSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putStratifiedSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `putTimestampSplit` <a name="putTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit"></a>

```java
public void putTimestampSplit(VertexAiTrainingPipelineInputDataConfigTimestampSplit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.putTimestampSplit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `resetAnnotationSchemaUri` <a name="resetAnnotationSchemaUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationSchemaUri"></a>

```java
public void resetAnnotationSchemaUri()
```

##### `resetAnnotationsFilter` <a name="resetAnnotationsFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetAnnotationsFilter"></a>

```java
public void resetAnnotationsFilter()
```

##### `resetBigqueryDestination` <a name="resetBigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetBigqueryDestination"></a>

```java
public void resetBigqueryDestination()
```

##### `resetFilterSplit` <a name="resetFilterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFilterSplit"></a>

```java
public void resetFilterSplit()
```

##### `resetFractionSplit` <a name="resetFractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetFractionSplit"></a>

```java
public void resetFractionSplit()
```

##### `resetGcsDestination` <a name="resetGcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetGcsDestination"></a>

```java
public void resetGcsDestination()
```

##### `resetPersistMlUseAssignment` <a name="resetPersistMlUseAssignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPersistMlUseAssignment"></a>

```java
public void resetPersistMlUseAssignment()
```

##### `resetPredefinedSplit` <a name="resetPredefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetPredefinedSplit"></a>

```java
public void resetPredefinedSplit()
```

##### `resetSavedQueryId` <a name="resetSavedQueryId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetSavedQueryId"></a>

```java
public void resetSavedQueryId()
```

##### `resetStratifiedSplit` <a name="resetStratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetStratifiedSplit"></a>

```java
public void resetStratifiedSplit()
```

##### `resetTimestampSplit` <a name="resetTimestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.resetTimestampSplit"></a>

```java
public void resetTimestampSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination">bigqueryDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit">filterSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit">fractionSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination">gcsDestination</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit">predefinedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit">stratifiedSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit">timestampSplit</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput">annotationSchemaUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput">annotationsFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput">bigqueryDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput">filterSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput">fractionSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput">gcsDestinationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput">persistMlUseAssignmentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput">predefinedSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput">savedQueryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput">stratifiedSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput">timestampSplitInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri">annotationSchemaUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter">annotationsFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment">persistMlUseAssignment</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId">savedQueryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bigqueryDestination`<sup>Required</sup> <a name="bigqueryDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestination"></a>

```java
public VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference getBigqueryDestination();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigBigqueryDestinationOutputReference</a>

---

##### `filterSplit`<sup>Required</sup> <a name="filterSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference getFilterSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFilterSplitOutputReference</a>

---

##### `fractionSplit`<sup>Required</sup> <a name="fractionSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference getFractionSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference">VertexAiTrainingPipelineInputDataConfigFractionSplitOutputReference</a>

---

##### `gcsDestination`<sup>Required</sup> <a name="gcsDestination" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestination"></a>

```java
public VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference getGcsDestination();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference">VertexAiTrainingPipelineInputDataConfigGcsDestinationOutputReference</a>

---

##### `predefinedSplit`<sup>Required</sup> <a name="predefinedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference getPredefinedSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference</a>

---

##### `stratifiedSplit`<sup>Required</sup> <a name="stratifiedSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference getStratifiedSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference">VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference</a>

---

##### `timestampSplit`<sup>Required</sup> <a name="timestampSplit" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplit"></a>

```java
public VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference getTimestampSplit();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference">VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference</a>

---

##### `annotationSchemaUriInput`<sup>Optional</sup> <a name="annotationSchemaUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUriInput"></a>

```java
public java.lang.String getAnnotationSchemaUriInput();
```

- *Type:* java.lang.String

---

##### `annotationsFilterInput`<sup>Optional</sup> <a name="annotationsFilterInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilterInput"></a>

```java
public java.lang.String getAnnotationsFilterInput();
```

- *Type:* java.lang.String

---

##### `bigqueryDestinationInput`<sup>Optional</sup> <a name="bigqueryDestinationInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.bigqueryDestinationInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigBigqueryDestination getBigqueryDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigBigqueryDestination">VertexAiTrainingPipelineInputDataConfigBigqueryDestination</a>

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `filterSplitInput`<sup>Optional</sup> <a name="filterSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.filterSplitInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFilterSplit getFilterSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFilterSplit">VertexAiTrainingPipelineInputDataConfigFilterSplit</a>

---

##### `fractionSplitInput`<sup>Optional</sup> <a name="fractionSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.fractionSplitInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigFractionSplit getFractionSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigFractionSplit">VertexAiTrainingPipelineInputDataConfigFractionSplit</a>

---

##### `gcsDestinationInput`<sup>Optional</sup> <a name="gcsDestinationInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.gcsDestinationInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigGcsDestination getGcsDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigGcsDestination">VertexAiTrainingPipelineInputDataConfigGcsDestination</a>

---

##### `persistMlUseAssignmentInput`<sup>Optional</sup> <a name="persistMlUseAssignmentInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignmentInput"></a>

```java
public java.lang.Boolean|IResolvable getPersistMlUseAssignmentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `predefinedSplitInput`<sup>Optional</sup> <a name="predefinedSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.predefinedSplitInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigPredefinedSplit getPredefinedSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---

##### `savedQueryIdInput`<sup>Optional</sup> <a name="savedQueryIdInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryIdInput"></a>

```java
public java.lang.String getSavedQueryIdInput();
```

- *Type:* java.lang.String

---

##### `stratifiedSplitInput`<sup>Optional</sup> <a name="stratifiedSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.stratifiedSplitInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigStratifiedSplit getStratifiedSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---

##### `timestampSplitInput`<sup>Optional</sup> <a name="timestampSplitInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.timestampSplitInput"></a>

```java
public VertexAiTrainingPipelineInputDataConfigTimestampSplit getTimestampSplitInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---

##### `annotationSchemaUri`<sup>Required</sup> <a name="annotationSchemaUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationSchemaUri"></a>

```java
public java.lang.String getAnnotationSchemaUri();
```

- *Type:* java.lang.String

---

##### `annotationsFilter`<sup>Required</sup> <a name="annotationsFilter" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.annotationsFilter"></a>

```java
public java.lang.String getAnnotationsFilter();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `persistMlUseAssignment`<sup>Required</sup> <a name="persistMlUseAssignment" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.persistMlUseAssignment"></a>

```java
public java.lang.Boolean|IResolvable getPersistMlUseAssignment();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `savedQueryId`<sup>Required</sup> <a name="savedQueryId" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.savedQueryId"></a>

```java
public java.lang.String getSavedQueryId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfig">VertexAiTrainingPipelineInputDataConfig</a>

---


### VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference;

new VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplitOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigPredefinedSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigPredefinedSplit">VertexAiTrainingPipelineInputDataConfigPredefinedSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference;

new VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction">resetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction">resetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction">resetValidationFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestFraction` <a name="resetTestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTestFraction"></a>

```java
public void resetTestFraction()
```

##### `resetTrainingFraction` <a name="resetTrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetTrainingFraction"></a>

```java
public void resetTrainingFraction()
```

##### `resetValidationFraction` <a name="resetValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.resetValidationFraction"></a>

```java
public void resetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput">testFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput">trainingFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput">validationFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `testFractionInput`<sup>Optional</sup> <a name="testFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFractionInput"></a>

```java
public java.lang.Number getTestFractionInput();
```

- *Type:* java.lang.Number

---

##### `trainingFractionInput`<sup>Optional</sup> <a name="trainingFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFractionInput"></a>

```java
public java.lang.Number getTrainingFractionInput();
```

- *Type:* java.lang.Number

---

##### `validationFractionInput`<sup>Optional</sup> <a name="validationFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFractionInput"></a>

```java
public java.lang.Number getValidationFractionInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `testFraction`<sup>Required</sup> <a name="testFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

---

##### `validationFraction`<sup>Required</sup> <a name="validationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplitOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigStratifiedSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigStratifiedSplit">VertexAiTrainingPipelineInputDataConfigStratifiedSplit</a>

---


### VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference <a name="VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference;

new VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction">resetTestFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction">resetTrainingFraction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction">resetValidationFraction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTestFraction` <a name="resetTestFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTestFraction"></a>

```java
public void resetTestFraction()
```

##### `resetTrainingFraction` <a name="resetTrainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetTrainingFraction"></a>

```java
public void resetTrainingFraction()
```

##### `resetValidationFraction` <a name="resetValidationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.resetValidationFraction"></a>

```java
public void resetValidationFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput">testFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput">trainingFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput">validationFractionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction">testFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction">trainingFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction">validationFraction</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `testFractionInput`<sup>Optional</sup> <a name="testFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFractionInput"></a>

```java
public java.lang.Number getTestFractionInput();
```

- *Type:* java.lang.Number

---

##### `trainingFractionInput`<sup>Optional</sup> <a name="trainingFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFractionInput"></a>

```java
public java.lang.Number getTrainingFractionInput();
```

- *Type:* java.lang.Number

---

##### `validationFractionInput`<sup>Optional</sup> <a name="validationFractionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFractionInput"></a>

```java
public java.lang.Number getValidationFractionInput();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `testFraction`<sup>Required</sup> <a name="testFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.testFraction"></a>

```java
public java.lang.Number getTestFraction();
```

- *Type:* java.lang.Number

---

##### `trainingFraction`<sup>Required</sup> <a name="trainingFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.trainingFraction"></a>

```java
public java.lang.Number getTrainingFraction();
```

- *Type:* java.lang.Number

---

##### `validationFraction`<sup>Required</sup> <a name="validationFraction" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.validationFraction"></a>

```java
public java.lang.Number getValidationFraction();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplitOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineInputDataConfigTimestampSplit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineInputDataConfigTimestampSplit">VertexAiTrainingPipelineInputDataConfigTimestampSplit</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecEnvList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnvList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList;

new VertexAiTrainingPipelineModelToUploadContainerSpecEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList;

new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec">putExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExec` <a name="putExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec"></a>

```java
public void putExec(VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `resetExec` <a name="resetExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetExec"></a>

```java
public void resetExec()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput">execInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.exec"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference getExec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExecOutputReference</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.execInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec getExecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeExec</a>

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts">putGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe">putHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts">putPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe">putStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout">resetDeploymentTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts">resetGrpcPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe">resetHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute">resetHealthRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute">resetPredictRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb">resetSharedMemorySizeMb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe">resetStartupProbe</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

---

##### `putGrpcPorts` <a name="putGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts"></a>

```java
public void putGrpcPorts(IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putGrpcPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

---

##### `putHealthProbe` <a name="putHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe"></a>

```java
public void putHealthProbe(VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putHealthProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `putPorts` <a name="putPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts"></a>

```java
public void putPorts(IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecPorts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putPorts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

---

##### `putStartupProbe` <a name="putStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe"></a>

```java
public void putStartupProbe(VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetDeploymentTimeout` <a name="resetDeploymentTimeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetDeploymentTimeout"></a>

```java
public void resetDeploymentTimeout()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetGrpcPorts` <a name="resetGrpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetGrpcPorts"></a>

```java
public void resetGrpcPorts()
```

##### `resetHealthProbe` <a name="resetHealthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthProbe"></a>

```java
public void resetHealthProbe()
```

##### `resetHealthRoute` <a name="resetHealthRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetHealthRoute"></a>

```java
public void resetHealthRoute()
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPorts"></a>

```java
public void resetPorts()
```

##### `resetPredictRoute` <a name="resetPredictRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetPredictRoute"></a>

```java
public void resetPredictRoute()
```

##### `resetSharedMemorySizeMb` <a name="resetSharedMemorySizeMb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetSharedMemorySizeMb"></a>

```java
public void resetSharedMemorySizeMb()
```

##### `resetStartupProbe` <a name="resetStartupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.resetStartupProbe"></a>

```java
public void resetStartupProbe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList">VertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts">grpcPorts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput">deploymentTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput">grpcPortsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput">healthProbeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput">healthRouteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput">portsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput">predictRouteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput">sharedMemorySizeMbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput">startupProbeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout">deploymentTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute">healthRoute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute">predictRoute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb">sharedMemorySizeMb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.env"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnvList">VertexAiTrainingPipelineModelToUploadContainerSpecEnvList</a>

---

##### `grpcPorts`<sup>Required</sup> <a name="grpcPorts" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPorts"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList getGrpcPorts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPortsList</a>

---

##### `healthProbe`<sup>Required</sup> <a name="healthProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbe"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference getHealthProbe();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbeOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.ports"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecPortsList getPorts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList">VertexAiTrainingPipelineModelToUploadContainerSpecPortsList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbe"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference getStartupProbe();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTimeoutInput`<sup>Optional</sup> <a name="deploymentTimeoutInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeoutInput"></a>

```java
public java.lang.String getDeploymentTimeoutInput();
```

- *Type:* java.lang.String

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecEnv">VertexAiTrainingPipelineModelToUploadContainerSpecEnv</a>>

---

##### `grpcPortsInput`<sup>Optional</sup> <a name="grpcPortsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.grpcPortsInput"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts> getGrpcPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts">VertexAiTrainingPipelineModelToUploadContainerSpecGrpcPorts</a>>

---

##### `healthProbeInput`<sup>Optional</sup> <a name="healthProbeInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthProbeInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe getHealthProbeInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe">VertexAiTrainingPipelineModelToUploadContainerSpecHealthProbe</a>

---

##### `healthRouteInput`<sup>Optional</sup> <a name="healthRouteInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRouteInput"></a>

```java
public java.lang.String getHealthRouteInput();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.portsInput"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecPorts> getPortsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

---

##### `predictRouteInput`<sup>Optional</sup> <a name="predictRouteInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRouteInput"></a>

```java
public java.lang.String getPredictRouteInput();
```

- *Type:* java.lang.String

---

##### `sharedMemorySizeMbInput`<sup>Optional</sup> <a name="sharedMemorySizeMbInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMbInput"></a>

```java
public java.lang.String getSharedMemorySizeMbInput();
```

- *Type:* java.lang.String

---

##### `startupProbeInput`<sup>Optional</sup> <a name="startupProbeInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.startupProbeInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe getStartupProbeInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deploymentTimeout`<sup>Required</sup> <a name="deploymentTimeout" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.deploymentTimeout"></a>

```java
public java.lang.String getDeploymentTimeout();
```

- *Type:* java.lang.String

---

##### `healthRoute`<sup>Required</sup> <a name="healthRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.healthRoute"></a>

```java
public java.lang.String getHealthRoute();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `predictRoute`<sup>Required</sup> <a name="predictRoute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.predictRoute"></a>

```java
public java.lang.String getPredictRoute();
```

- *Type:* java.lang.String

---

##### `sharedMemorySizeMb`<sup>Required</sup> <a name="sharedMemorySizeMb" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.sharedMemorySizeMb"></a>

```java
public java.lang.String getSharedMemorySizeMb();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecPortsList <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPortsList" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList;

new VertexAiTrainingPipelineModelToUploadContainerSpecPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiTrainingPipelineModelToUploadContainerSpecPorts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPortsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiTrainingPipelineModelToUploadContainerSpecPorts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecPorts">VertexAiTrainingPipelineModelToUploadContainerSpecPorts</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand">resetCommand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommand` <a name="resetCommand" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.resetCommand"></a>

```java
public void resetCommand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---


### VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference <a name="VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference;

new VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec">putExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec">resetExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds">resetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExec` <a name="putExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec"></a>

```java
public void putExec(VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.putExec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `resetExec` <a name="resetExec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetExec"></a>

```java
public void resetExec()
```

##### `resetPeriodSeconds` <a name="resetPeriodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetPeriodSeconds"></a>

```java
public void resetPeriodSeconds()
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec">exec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput">execInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exec`<sup>Required</sup> <a name="exec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.exec"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference getExec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExecOutputReference</a>

---

##### `execInput`<sup>Optional</sup> <a name="execInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.execInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec getExecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeExec</a>

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbeOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe">VertexAiTrainingPipelineModelToUploadContainerSpecStartupProbe</a>

---


### VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference;

new VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---


### VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference <a name="VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference;

new VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUploadExplanationSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---


### VertexAiTrainingPipelineModelToUploadOutputReference <a name="VertexAiTrainingPipelineModelToUploadOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineModelToUploadOutputReference;

new VertexAiTrainingPipelineModelToUploadOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec">putExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri">resetArtifactUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec">resetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec">resetExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases">resetVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec"></a>

```java
public void putContainerSpec(VertexAiTrainingPipelineModelToUploadContainerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(VertexAiTrainingPipelineModelToUploadEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `putExplanationSpec` <a name="putExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec"></a>

```java
public void putExplanationSpec(VertexAiTrainingPipelineModelToUploadExplanationSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.putExplanationSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `resetArtifactUri` <a name="resetArtifactUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetArtifactUri"></a>

```java
public void resetArtifactUri()
```

##### `resetContainerSpec` <a name="resetContainerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetContainerSpec"></a>

```java
public void resetContainerSpec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetExplanationSpec` <a name="resetExplanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetExplanationSpec"></a>

```java
public void resetExplanationSpec()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetVersionAliases` <a name="resetVersionAliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionAliases"></a>

```java
public void resetVersionAliases()
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.resetVersionDescription"></a>

```java
public void resetVersionDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec">explanationSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput">artifactUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput">explanationSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput">versionAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri">artifactUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases">versionAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription">versionDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpec"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference">VertexAiTrainingPipelineModelToUploadContainerSpecOutputReference</a>

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpec"></a>

```java
public VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference">VertexAiTrainingPipelineModelToUploadEncryptionSpecOutputReference</a>

---

##### `explanationSpec`<sup>Required</sup> <a name="explanationSpec" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpec"></a>

```java
public VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference getExplanationSpec();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference">VertexAiTrainingPipelineModelToUploadExplanationSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `artifactUriInput`<sup>Optional</sup> <a name="artifactUriInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUriInput"></a>

```java
public java.lang.String getArtifactUriInput();
```

- *Type:* java.lang.String

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.containerSpecInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadContainerSpec getContainerSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadContainerSpec">VertexAiTrainingPipelineModelToUploadContainerSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.encryptionSpecInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadEncryptionSpec">VertexAiTrainingPipelineModelToUploadEncryptionSpec</a>

---

##### `explanationSpecInput`<sup>Optional</sup> <a name="explanationSpecInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.explanationSpecInput"></a>

```java
public VertexAiTrainingPipelineModelToUploadExplanationSpec getExplanationSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadExplanationSpec">VertexAiTrainingPipelineModelToUploadExplanationSpec</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionAliasesInput`<sup>Optional</sup> <a name="versionAliasesInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliasesInput"></a>

```java
public java.util.List<java.lang.String> getVersionAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescriptionInput"></a>

```java
public java.lang.String getVersionDescriptionInput();
```

- *Type:* java.lang.String

---

##### `artifactUri`<sup>Required</sup> <a name="artifactUri" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.artifactUri"></a>

```java
public java.lang.String getArtifactUri();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionAliases"></a>

```java
public java.util.List<java.lang.String> getVersionAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.versionDescription"></a>

```java
public java.lang.String getVersionDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUploadOutputReference.property.internalValue"></a>

```java
public VertexAiTrainingPipelineModelToUpload getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineModelToUpload">VertexAiTrainingPipelineModelToUpload</a>

---


### VertexAiTrainingPipelineTimeoutsOutputReference <a name="VertexAiTrainingPipelineTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_training_pipeline.VertexAiTrainingPipelineTimeoutsOutputReference;

new VertexAiTrainingPipelineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiTrainingPipelineTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiTrainingPipeline.VertexAiTrainingPipelineTimeouts">VertexAiTrainingPipelineTimeouts</a>

---



