# `colabNotebookExecution` Submodule <a name="`colabNotebookExecution` Submodule" id="@cdktn/provider-google.colabNotebookExecution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ColabNotebookExecution <a name="ColabNotebookExecution" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution google_colab_notebook_execution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .location(java.lang.String)
//  .customEnvironmentSpec(ColabNotebookExecutionCustomEnvironmentSpec)
//  .dataformRepositorySource(ColabNotebookExecutionDataformRepositorySource)
//  .deletionPolicy(java.lang.String)
//  .directNotebookSource(ColabNotebookExecutionDirectNotebookSource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(ColabNotebookExecutionGcsNotebookSource)
//  .id(java.lang.String)
//  .notebookExecutionJobId(java.lang.String)
//  .notebookRuntimeTemplateResourceName(java.lang.String)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(ColabNotebookExecutionTimeouts)
//  .workbenchRuntime(ColabNotebookExecutionWorkbenchRuntime)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.customEnvironmentSpec">customEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.workbenchRuntime">workbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | workbench_runtime block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsOutputUri"></a>

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `customEnvironmentSpec`<sup>Optional</sup> <a name="customEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.customEnvironmentSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#custom_environment_spec ColabNotebookExecution#custom_environment_spec}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.dataformRepositorySource"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#deletion_policy ColabNotebookExecution#deletion_policy}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.directNotebookSource"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionTimeout"></a>

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.executionUser"></a>

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.gcsNotebookSource"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookExecutionJobId"></a>

- *Type:* java.lang.String

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.notebookRuntimeTemplateResourceName"></a>

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

##### `workbenchRuntime`<sup>Optional</sup> <a name="workbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.Initializer.parameter.workbenchRuntime"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

workbench_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#workbench_runtime ColabNotebookExecution#workbench_runtime}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec">putCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource">putDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource">putDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource">putGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putWorkbenchRuntime">putWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetCustomEnvironmentSpec">resetCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource">resetDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource">resetDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout">resetExecutionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser">resetExecutionUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource">resetGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId">resetNotebookExecutionJobId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName">resetNotebookRuntimeTemplateResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetWorkbenchRuntime">resetWorkbenchRuntime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomEnvironmentSpec` <a name="putCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec"></a>

```java
public void putCustomEnvironmentSpec(ColabNotebookExecutionCustomEnvironmentSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putCustomEnvironmentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `putDataformRepositorySource` <a name="putDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource"></a>

```java
public void putDataformRepositorySource(ColabNotebookExecutionDataformRepositorySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDataformRepositorySource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `putDirectNotebookSource` <a name="putDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource"></a>

```java
public void putDirectNotebookSource(ColabNotebookExecutionDirectNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putDirectNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `putGcsNotebookSource` <a name="putGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource"></a>

```java
public void putGcsNotebookSource(ColabNotebookExecutionGcsNotebookSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putGcsNotebookSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts"></a>

```java
public void putTimeouts(ColabNotebookExecutionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `putWorkbenchRuntime` <a name="putWorkbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putWorkbenchRuntime"></a>

```java
public void putWorkbenchRuntime(ColabNotebookExecutionWorkbenchRuntime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.putWorkbenchRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

---

##### `resetCustomEnvironmentSpec` <a name="resetCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetCustomEnvironmentSpec"></a>

```java
public void resetCustomEnvironmentSpec()
```

##### `resetDataformRepositorySource` <a name="resetDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDataformRepositorySource"></a>

```java
public void resetDataformRepositorySource()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDirectNotebookSource` <a name="resetDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetDirectNotebookSource"></a>

```java
public void resetDirectNotebookSource()
```

##### `resetExecutionTimeout` <a name="resetExecutionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionTimeout"></a>

```java
public void resetExecutionTimeout()
```

##### `resetExecutionUser` <a name="resetExecutionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetExecutionUser"></a>

```java
public void resetExecutionUser()
```

##### `resetGcsNotebookSource` <a name="resetGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetGcsNotebookSource"></a>

```java
public void resetGcsNotebookSource()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetId"></a>

```java
public void resetId()
```

##### `resetNotebookExecutionJobId` <a name="resetNotebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookExecutionJobId"></a>

```java
public void resetNotebookExecutionJobId()
```

##### `resetNotebookRuntimeTemplateResourceName` <a name="resetNotebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetNotebookRuntimeTemplateResourceName"></a>

```java
public void resetNotebookRuntimeTemplateResourceName()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetProject"></a>

```java
public void resetProject()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkbenchRuntime` <a name="resetWorkbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.resetWorkbenchRuntime"></a>

```java
public void resetWorkbenchRuntime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecution;

ColabNotebookExecution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ColabNotebookExecution.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ColabNotebookExecution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ColabNotebookExecution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ColabNotebookExecution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ColabNotebookExecution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpec">customEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntime">workbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference">ColabNotebookExecutionWorkbenchRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpecInput">customEnvironmentSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput">dataformRepositorySourceInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput">directNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput">executionTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput">executionUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput">gcsNotebookSourceInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput">gcsOutputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput">notebookExecutionJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput">notebookRuntimeTemplateResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntimeInput">workbenchRuntimeInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customEnvironmentSpec`<sup>Required</sup> <a name="customEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecOutputReference getCustomEnvironmentSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecOutputReference</a>

---

##### `dataformRepositorySource`<sup>Required</sup> <a name="dataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySource"></a>

```java
public ColabNotebookExecutionDataformRepositorySourceOutputReference getDataformRepositorySource();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference">ColabNotebookExecutionDataformRepositorySourceOutputReference</a>

---

##### `directNotebookSource`<sup>Required</sup> <a name="directNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSource"></a>

```java
public ColabNotebookExecutionDirectNotebookSourceOutputReference getDirectNotebookSource();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference">ColabNotebookExecutionDirectNotebookSourceOutputReference</a>

---

##### `gcsNotebookSource`<sup>Required</sup> <a name="gcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSource"></a>

```java
public ColabNotebookExecutionGcsNotebookSourceOutputReference getGcsNotebookSource();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference">ColabNotebookExecutionGcsNotebookSourceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeouts"></a>

```java
public ColabNotebookExecutionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference">ColabNotebookExecutionTimeoutsOutputReference</a>

---

##### `workbenchRuntime`<sup>Required</sup> <a name="workbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntime"></a>

```java
public ColabNotebookExecutionWorkbenchRuntimeOutputReference getWorkbenchRuntime();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference">ColabNotebookExecutionWorkbenchRuntimeOutputReference</a>

---

##### `customEnvironmentSpecInput`<sup>Optional</sup> <a name="customEnvironmentSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.customEnvironmentSpecInput"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpec getCustomEnvironmentSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---

##### `dataformRepositorySourceInput`<sup>Optional</sup> <a name="dataformRepositorySourceInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.dataformRepositorySourceInput"></a>

```java
public ColabNotebookExecutionDataformRepositorySource getDataformRepositorySourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `directNotebookSourceInput`<sup>Optional</sup> <a name="directNotebookSourceInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.directNotebookSourceInput"></a>

```java
public ColabNotebookExecutionDirectNotebookSource getDirectNotebookSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionTimeoutInput`<sup>Optional</sup> <a name="executionTimeoutInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeoutInput"></a>

```java
public java.lang.String getExecutionTimeoutInput();
```

- *Type:* java.lang.String

---

##### `executionUserInput`<sup>Optional</sup> <a name="executionUserInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUserInput"></a>

```java
public java.lang.String getExecutionUserInput();
```

- *Type:* java.lang.String

---

##### `gcsNotebookSourceInput`<sup>Optional</sup> <a name="gcsNotebookSourceInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsNotebookSourceInput"></a>

```java
public ColabNotebookExecutionGcsNotebookSource getGcsNotebookSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---

##### `gcsOutputUriInput`<sup>Optional</sup> <a name="gcsOutputUriInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUriInput"></a>

```java
public java.lang.String getGcsOutputUriInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJobIdInput`<sup>Optional</sup> <a name="notebookExecutionJobIdInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobIdInput"></a>

```java
public java.lang.String getNotebookExecutionJobIdInput();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceNameInput`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceNameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceNameInput"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.timeoutsInput"></a>

```java
public IResolvable|ColabNotebookExecutionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---

##### `workbenchRuntimeInput`<sup>Optional</sup> <a name="workbenchRuntimeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.workbenchRuntimeInput"></a>

```java
public ColabNotebookExecutionWorkbenchRuntime getWorkbenchRuntimeInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executionTimeout`<sup>Required</sup> <a name="executionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

---

##### `executionUser`<sup>Required</sup> <a name="executionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `notebookExecutionJobId`<sup>Required</sup> <a name="notebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookExecutionJobId"></a>

```java
public java.lang.String getNotebookExecutionJobId();
```

- *Type:* java.lang.String

---

##### `notebookRuntimeTemplateResourceName`<sup>Required</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecution.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ColabNotebookExecutionConfig <a name="ColabNotebookExecutionConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionConfig;

ColabNotebookExecutionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .gcsOutputUri(java.lang.String)
    .location(java.lang.String)
//  .customEnvironmentSpec(ColabNotebookExecutionCustomEnvironmentSpec)
//  .dataformRepositorySource(ColabNotebookExecutionDataformRepositorySource)
//  .deletionPolicy(java.lang.String)
//  .directNotebookSource(ColabNotebookExecutionDirectNotebookSource)
//  .executionTimeout(java.lang.String)
//  .executionUser(java.lang.String)
//  .gcsNotebookSource(ColabNotebookExecutionGcsNotebookSource)
//  .id(java.lang.String)
//  .notebookExecutionJobId(java.lang.String)
//  .notebookRuntimeTemplateResourceName(java.lang.String)
//  .project(java.lang.String)
//  .serviceAccount(java.lang.String)
//  .timeouts(ColabNotebookExecutionTimeouts)
//  .workbenchRuntime(ColabNotebookExecutionWorkbenchRuntime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Notebook Execution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri">gcsOutputUri</a></code> | <code>java.lang.String</code> | The Cloud Storage location to upload the result to. Format:'gs://bucket-name'. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.customEnvironmentSpec">customEnvironmentSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | custom_environment_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource">dataformRepositorySource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | dataform_repository_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource">directNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | direct_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout">executionTimeout</a></code> | <code>java.lang.String</code> | Max running time of the execution job in seconds (default 86400s / 24 hrs). |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser">executionUser</a></code> | <code>java.lang.String</code> | The user email to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource">gcsNotebookSource</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | gcs_notebook_source block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId">notebookExecutionJobId</a></code> | <code>java.lang.String</code> | User specified ID for the Notebook Execution Job. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName">notebookRuntimeTemplateResourceName</a></code> | <code>java.lang.String</code> | The NotebookRuntimeTemplate to source compute configuration from. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | The service account to run the execution as. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.workbenchRuntime">workbenchRuntime</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | workbench_runtime block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Notebook Execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#display_name ColabNotebookExecution#display_name}

---

##### `gcsOutputUri`<sup>Required</sup> <a name="gcsOutputUri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsOutputUri"></a>

```java
public java.lang.String getGcsOutputUri();
```

- *Type:* java.lang.String

The Cloud Storage location to upload the result to. Format:'gs://bucket-name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_output_uri ColabNotebookExecution#gcs_output_uri}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#location ColabNotebookExecution#location}

---

##### `customEnvironmentSpec`<sup>Optional</sup> <a name="customEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.customEnvironmentSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpec getCustomEnvironmentSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

custom_environment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#custom_environment_spec ColabNotebookExecution#custom_environment_spec}

---

##### `dataformRepositorySource`<sup>Optional</sup> <a name="dataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.dataformRepositorySource"></a>

```java
public ColabNotebookExecutionDataformRepositorySource getDataformRepositorySource();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

dataform_repository_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_source ColabNotebookExecution#dataform_repository_source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#deletion_policy ColabNotebookExecution#deletion_policy}

---

##### `directNotebookSource`<sup>Optional</sup> <a name="directNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.directNotebookSource"></a>

```java
public ColabNotebookExecutionDirectNotebookSource getDirectNotebookSource();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

direct_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#direct_notebook_source ColabNotebookExecution#direct_notebook_source}

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionTimeout"></a>

```java
public java.lang.String getExecutionTimeout();
```

- *Type:* java.lang.String

Max running time of the execution job in seconds (default 86400s / 24 hrs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_timeout ColabNotebookExecution#execution_timeout}

---

##### `executionUser`<sup>Optional</sup> <a name="executionUser" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.executionUser"></a>

```java
public java.lang.String getExecutionUser();
```

- *Type:* java.lang.String

The user email to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#execution_user ColabNotebookExecution#execution_user}

---

##### `gcsNotebookSource`<sup>Optional</sup> <a name="gcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.gcsNotebookSource"></a>

```java
public ColabNotebookExecutionGcsNotebookSource getGcsNotebookSource();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

gcs_notebook_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#gcs_notebook_source ColabNotebookExecution#gcs_notebook_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#id ColabNotebookExecution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebookExecutionJobId`<sup>Optional</sup> <a name="notebookExecutionJobId" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookExecutionJobId"></a>

```java
public java.lang.String getNotebookExecutionJobId();
```

- *Type:* java.lang.String

User specified ID for the Notebook Execution Job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_execution_job_id ColabNotebookExecution#notebook_execution_job_id}

---

##### `notebookRuntimeTemplateResourceName`<sup>Optional</sup> <a name="notebookRuntimeTemplateResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.notebookRuntimeTemplateResourceName"></a>

```java
public java.lang.String getNotebookRuntimeTemplateResourceName();
```

- *Type:* java.lang.String

The NotebookRuntimeTemplate to source compute configuration from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#notebook_runtime_template_resource_name ColabNotebookExecution#notebook_runtime_template_resource_name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

The service account to run the execution as.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#service_account ColabNotebookExecution#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.timeouts"></a>

```java
public ColabNotebookExecutionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#timeouts ColabNotebookExecution#timeouts}

---

##### `workbenchRuntime`<sup>Optional</sup> <a name="workbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionConfig.property.workbenchRuntime"></a>

```java
public ColabNotebookExecutionWorkbenchRuntime getWorkbenchRuntime();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

workbench_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#workbench_runtime ColabNotebookExecution#workbench_runtime}

---

### ColabNotebookExecutionCustomEnvironmentSpec <a name="ColabNotebookExecutionCustomEnvironmentSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpec;

ColabNotebookExecutionCustomEnvironmentSpec.builder()
//  .machineSpec(ColabNotebookExecutionCustomEnvironmentSpecMachineSpec)
//  .networkSpec(ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec)
//  .persistentDiskSpec(ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec)
//  .shieldedInstanceConfig(ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec">persistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | persistent_disk_spec block. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a></code> | shielded_instance_config block. |

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.machineSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#machine_spec ColabNotebookExecution#machine_spec}

---

##### `networkSpec`<sup>Optional</sup> <a name="networkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.networkSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec getNetworkSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#network_spec ColabNotebookExecution#network_spec}

---

##### `persistentDiskSpec`<sup>Optional</sup> <a name="persistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.persistentDiskSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec getPersistentDiskSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#persistent_disk_spec ColabNotebookExecution#persistent_disk_spec}

---

##### `shieldedInstanceConfig`<sup>Optional</sup> <a name="shieldedInstanceConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec.property.shieldedInstanceConfig"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#shielded_instance_config ColabNotebookExecution#shielded_instance_config}

---

### ColabNotebookExecutionCustomEnvironmentSpecMachineSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec;

ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
//  .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The Compute Engine machine type selected for the runtime. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#accelerator_count ColabNotebookExecution#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#accelerator_type ColabNotebookExecution#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#machine_type ColabNotebookExecution#machine_type}

---

### ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec;

ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.builder()
//  .enableInternetAccess(java.lang.Boolean|IResolvable)
//  .network(java.lang.String)
//  .subnetwork(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork that this runtime is in. |

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.enableInternetAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternetAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_internet_access ColabNotebookExecution#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#network ColabNotebookExecution#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#subnetwork ColabNotebookExecution#subnetwork}

---

### ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec <a name="ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec;

ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.builder()
//  .diskSizeGb(java.lang.String)
//  .diskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The type of the persistent disk. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#disk_size_gb ColabNotebookExecution#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#disk_type ColabNotebookExecution#disk_type}

---

### ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig <a name="ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig;

ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.builder()
//  .enableIntegrityMonitoring(java.lang.Boolean|IResolvable)
//  .enableSecureBoot(java.lang.Boolean|IResolvable)
//  .enableVtpm(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `enableIntegrityMonitoring`<sup>Optional</sup> <a name="enableIntegrityMonitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_integrity_monitoring ColabNotebookExecution#enable_integrity_monitoring}

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableSecureBoot"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecureBoot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_secure_boot ColabNotebookExecution#enable_secure_boot}

---

##### `enableVtpm`<sup>Optional</sup> <a name="enableVtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig.property.enableVtpm"></a>

```java
public java.lang.Boolean|IResolvable getEnableVtpm();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#enable_vtpm ColabNotebookExecution#enable_vtpm}

---

### ColabNotebookExecutionDataformRepositorySource <a name="ColabNotebookExecutionDataformRepositorySource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionDataformRepositorySource;

ColabNotebookExecutionDataformRepositorySource.builder()
    .dataformRepositoryResourceName(java.lang.String)
//  .commitSha(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | The resource name of the Dataform Repository. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | The commit SHA to read repository with. If unset, the file will be read at HEAD. |

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

The resource name of the Dataform Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#dataform_repository_resource_name ColabNotebookExecution#dataform_repository_resource_name}

---

##### `commitSha`<sup>Optional</sup> <a name="commitSha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

The commit SHA to read repository with. If unset, the file will be read at HEAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#commit_sha ColabNotebookExecution#commit_sha}

---

### ColabNotebookExecutionDirectNotebookSource <a name="ColabNotebookExecutionDirectNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionDirectNotebookSource;

ColabNotebookExecutionDirectNotebookSource.builder()
    .content(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content">content</a></code> | <code>java.lang.String</code> | The base64-encoded contents of the input notebook file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

The base64-encoded contents of the input notebook file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#content ColabNotebookExecution#content}

---

### ColabNotebookExecutionGcsNotebookSource <a name="ColabNotebookExecutionGcsNotebookSource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionGcsNotebookSource;

ColabNotebookExecutionGcsNotebookSource.builder()
    .uri(java.lang.String)
//  .generation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri">uri</a></code> | <code>java.lang.String</code> | The Cloud Storage uri pointing to the ipynb file. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation">generation</a></code> | <code>java.lang.String</code> | The version of the Cloud Storage object to read. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The Cloud Storage uri pointing to the ipynb file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#uri ColabNotebookExecution#uri}

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

The version of the Cloud Storage object to read.

If unset, the current version of the object is read. See https://cloud.google.com/storage/docs/metadata#generation-number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#generation ColabNotebookExecution#generation}

---

### ColabNotebookExecutionTimeouts <a name="ColabNotebookExecutionTimeouts" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionTimeouts;

ColabNotebookExecutionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#create ColabNotebookExecution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#delete ColabNotebookExecution#delete}.

---

### ColabNotebookExecutionWorkbenchRuntime <a name="ColabNotebookExecutionWorkbenchRuntime" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionWorkbenchRuntime;

ColabNotebookExecutionWorkbenchRuntime.builder()
    .vmImage(ColabNotebookExecutionWorkbenchRuntimeVmImage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime.property.vmImage">vmImage</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a></code> | vm_image block. |

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime.property.vmImage"></a>

```java
public ColabNotebookExecutionWorkbenchRuntimeVmImage getVmImage();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#vm_image ColabNotebookExecution#vm_image}

---

### ColabNotebookExecutionWorkbenchRuntimeVmImage <a name="ColabNotebookExecutionWorkbenchRuntimeVmImage" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionWorkbenchRuntimeVmImage;

ColabNotebookExecutionWorkbenchRuntimeVmImage.builder()
//  .family(java.lang.String)
//  .name(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.family">family</a></code> | <code>java.lang.String</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.name">name</a></code> | <code>java.lang.String</code> | Use VM image name to find the image. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.project">project</a></code> | <code>java.lang.String</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `family`<sup>Optional</sup> <a name="family" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#family ColabNotebookExecution#family}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#name ColabNotebookExecution#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/colab_notebook_execution#project ColabNotebookExecution#project}

---

## Classes <a name="Classes" id="Classes"></a>

### ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference;

new ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference;

new ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```java
public void resetEnableInternetAccess()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternetAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.enableInternetAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternetAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference;

new ColabNotebookExecutionCustomEnvironmentSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec">putNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec">putPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig">putShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec">resetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec">resetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec">resetPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetShieldedInstanceConfig">resetShieldedInstanceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec"></a>

```java
public void putMachineSpec(ColabNotebookExecutionCustomEnvironmentSpecMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `putNetworkSpec` <a name="putNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec"></a>

```java
public void putNetworkSpec(ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `putPersistentDiskSpec` <a name="putPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec"></a>

```java
public void putPersistentDiskSpec(ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `putShieldedInstanceConfig` <a name="putShieldedInstanceConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig"></a>

```java
public void putShieldedInstanceConfig(ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

---

##### `resetMachineSpec` <a name="resetMachineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetMachineSpec"></a>

```java
public void resetMachineSpec()
```

##### `resetNetworkSpec` <a name="resetNetworkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetNetworkSpec"></a>

```java
public void resetNetworkSpec()
```

##### `resetPersistentDiskSpec` <a name="resetPersistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetPersistentDiskSpec"></a>

```java
public void resetPersistentDiskSpec()
```

##### `resetShieldedInstanceConfig` <a name="resetShieldedInstanceConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.resetShieldedInstanceConfig"></a>

```java
public void resetShieldedInstanceConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec">persistentDiskSpec</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfig">shieldedInstanceConfig</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput">networkSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput">persistentDiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfigInput">shieldedInstanceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecMachineSpecOutputReference</a>

---

##### `networkSpec`<sup>Required</sup> <a name="networkSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference getNetworkSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpecOutputReference</a>

---

##### `persistentDiskSpec`<sup>Required</sup> <a name="persistentDiskSpec" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpec"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference getPersistentDiskSpec();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference</a>

---

##### `shieldedInstanceConfig`<sup>Required</sup> <a name="shieldedInstanceConfig" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfig"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference getShieldedInstanceConfig();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference</a>

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.machineSpecInput"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecMachineSpec">ColabNotebookExecutionCustomEnvironmentSpecMachineSpec</a>

---

##### `networkSpecInput`<sup>Optional</sup> <a name="networkSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.networkSpecInput"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec getNetworkSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec">ColabNotebookExecutionCustomEnvironmentSpecNetworkSpec</a>

---

##### `persistentDiskSpecInput`<sup>Optional</sup> <a name="persistentDiskSpecInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.persistentDiskSpecInput"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec getPersistentDiskSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---

##### `shieldedInstanceConfigInput`<sup>Optional</sup> <a name="shieldedInstanceConfigInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.shieldedInstanceConfigInput"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig getShieldedInstanceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpec">ColabNotebookExecutionCustomEnvironmentSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference;

new ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpecOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec">ColabNotebookExecutionCustomEnvironmentSpecPersistentDiskSpec</a>

---


### ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference <a name="ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference;

new ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">resetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableVtpm">resetEnableVtpm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableIntegrityMonitoring` <a name="resetEnableIntegrityMonitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```java
public void resetEnableIntegrityMonitoring()
```

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```

##### `resetEnableVtpm` <a name="resetEnableVtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```java
public void resetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enableIntegrityMonitoringInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpmInput">enableVtpmInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enableIntegrityMonitoring</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpm">enableVtpm</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableIntegrityMonitoringInput`<sup>Optional</sup> <a name="enableIntegrityMonitoringInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIntegrityMonitoringInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableVtpmInput`<sup>Optional</sup> <a name="enableVtpmInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableVtpmInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableIntegrityMonitoring`<sup>Required</sup> <a name="enableIntegrityMonitoring" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```java
public java.lang.Boolean|IResolvable getEnableIntegrityMonitoring();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Boolean|IResolvable getEnableSecureBoot();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableVtpm`<sup>Required</sup> <a name="enableVtpm" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```java
public java.lang.Boolean|IResolvable getEnableVtpm();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfigOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig">ColabNotebookExecutionCustomEnvironmentSpecShieldedInstanceConfig</a>

---


### ColabNotebookExecutionDataformRepositorySourceOutputReference <a name="ColabNotebookExecutionDataformRepositorySourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionDataformRepositorySourceOutputReference;

new ColabNotebookExecutionDataformRepositorySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha">resetCommitSha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitSha` <a name="resetCommitSha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.resetCommitSha"></a>

```java
public void resetCommitSha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput">commitShaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput">dataformRepositoryResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha">commitSha</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName">dataformRepositoryResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commitShaInput`<sup>Optional</sup> <a name="commitShaInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitShaInput"></a>

```java
public java.lang.String getCommitShaInput();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceNameInput`<sup>Optional</sup> <a name="dataformRepositoryResourceNameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceNameInput"></a>

```java
public java.lang.String getDataformRepositoryResourceNameInput();
```

- *Type:* java.lang.String

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.commitSha"></a>

```java
public java.lang.String getCommitSha();
```

- *Type:* java.lang.String

---

##### `dataformRepositoryResourceName`<sup>Required</sup> <a name="dataformRepositoryResourceName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.dataformRepositoryResourceName"></a>

```java
public java.lang.String getDataformRepositoryResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySourceOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionDataformRepositorySource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDataformRepositorySource">ColabNotebookExecutionDataformRepositorySource</a>

---


### ColabNotebookExecutionDirectNotebookSourceOutputReference <a name="ColabNotebookExecutionDirectNotebookSourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionDirectNotebookSourceOutputReference;

new ColabNotebookExecutionDirectNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSourceOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionDirectNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionDirectNotebookSource">ColabNotebookExecutionDirectNotebookSource</a>

---


### ColabNotebookExecutionGcsNotebookSourceOutputReference <a name="ColabNotebookExecutionGcsNotebookSourceOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionGcsNotebookSourceOutputReference;

new ColabNotebookExecutionGcsNotebookSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration">resetGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGeneration` <a name="resetGeneration" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.resetGeneration"></a>

```java
public void resetGeneration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput">generationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation">generation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generationInput`<sup>Optional</sup> <a name="generationInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generationInput"></a>

```java
public java.lang.String getGenerationInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.generation"></a>

```java
public java.lang.String getGeneration();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSourceOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionGcsNotebookSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionGcsNotebookSource">ColabNotebookExecutionGcsNotebookSource</a>

---


### ColabNotebookExecutionTimeoutsOutputReference <a name="ColabNotebookExecutionTimeoutsOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionTimeoutsOutputReference;

new ColabNotebookExecutionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ColabNotebookExecutionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionTimeouts">ColabNotebookExecutionTimeouts</a>

---


### ColabNotebookExecutionWorkbenchRuntimeOutputReference <a name="ColabNotebookExecutionWorkbenchRuntimeOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionWorkbenchRuntimeOutputReference;

new ColabNotebookExecutionWorkbenchRuntimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage">putVmImage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVmImage` <a name="putVmImage" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage"></a>

```java
public void putVmImage(ColabNotebookExecutionWorkbenchRuntimeVmImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImage">vmImage</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference">ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImageInput">vmImageInput</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vmImage`<sup>Required</sup> <a name="vmImage" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImage"></a>

```java
public ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference getVmImage();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference">ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference</a>

---

##### `vmImageInput`<sup>Optional</sup> <a name="vmImageInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.vmImageInput"></a>

```java
public ColabNotebookExecutionWorkbenchRuntimeVmImage getVmImageInput();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionWorkbenchRuntime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntime">ColabNotebookExecutionWorkbenchRuntime</a>

---


### ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference <a name="ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.colab_notebook_execution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference;

new ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetFamily">resetFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFamily` <a name="resetFamily" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetFamily"></a>

```java
public void resetFamily()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImageOutputReference.property.internalValue"></a>

```java
public ColabNotebookExecutionWorkbenchRuntimeVmImage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.colabNotebookExecution.ColabNotebookExecutionWorkbenchRuntimeVmImage">ColabNotebookExecutionWorkbenchRuntimeVmImage</a>

---



