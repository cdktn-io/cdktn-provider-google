# `configDeployment` Submodule <a name="`configDeployment` Submodule" id="@cdktn/provider-google.configDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeployment <a name="ConfigDeployment" id="@cdktn/provider-google.configDeployment.ConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeployment;

ConfigDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .serviceAccount(java.lang.String)
    .terraformBlueprint(ConfigDeploymentTerraformBlueprint)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .artifactsGcsBucket(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .importExistingResources(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .quotaValidation(java.lang.String)
//  .tfVersionConstraint(java.lang.String)
//  .timeouts(ConfigDeploymentTimeouts)
//  .workerPool(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>java.lang.String</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#id ConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#project ConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.quotaValidation">quotaValidation</a></code> | <code>java.lang.String</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.tfVersionConstraint">tfVersionConstraint</a></code> | <code>java.lang.String</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Custom Cloud Build worker pool resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#location ConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#name ConfigDeployment#name}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.terraformBlueprint"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}

---

##### `artifactsGcsBucket`<sup>Optional</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.artifactsGcsBucket"></a>

- *Type:* java.lang.String

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#id ConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.importExistingResources"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#labels ConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#project ConfigDeployment#project}.

---

##### `quotaValidation`<sup>Optional</sup> <a name="quotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.quotaValidation"></a>

- *Type:* java.lang.String

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}

---

##### `tfVersionConstraint`<sup>Optional</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.tfVersionConstraint"></a>

- *Type:* java.lang.String

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.workerPool"></a>

- *Type:* java.lang.String

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint">putTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket">resetArtifactsGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources">resetImportExistingResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation">resetQuotaValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint">resetTfVersionConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool">resetWorkerPool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformBlueprint` <a name="putTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint"></a>

```java
public void putTerraformBlueprint(ConfigDeploymentTerraformBlueprint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts"></a>

```java
public void putTimeouts(ConfigDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetArtifactsGcsBucket` <a name="resetArtifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket"></a>

```java
public void resetArtifactsGcsBucket()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetImportExistingResources` <a name="resetImportExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources"></a>

```java
public void resetImportExistingResources()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetQuotaValidation` <a name="resetQuotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation"></a>

```java
public void resetQuotaValidation()
```

##### `resetTfVersionConstraint` <a name="resetTfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint"></a>

```java
public void resetTfVersionConstraint()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWorkerPool` <a name="resetWorkerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool"></a>

```java
public void resetWorkerPool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeployment;

ConfigDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeployment;

ConfigDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeployment;

ConfigDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeployment;

ConfigDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision">latestRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput">artifactsGcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput">importExistingResourcesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput">quotaValidationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput">terraformBlueprintInput</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput">tfVersionConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput">workerPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation">quotaValidation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint">tfVersionConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision"></a>

```java
public java.lang.String getLatestRevision();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint"></a>

```java
public ConfigDeploymentTerraformBlueprintOutputReference getTerraformBlueprint();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts"></a>

```java
public ConfigDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `artifactsGcsBucketInput`<sup>Optional</sup> <a name="artifactsGcsBucketInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput"></a>

```java
public java.lang.String getArtifactsGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importExistingResourcesInput`<sup>Optional</sup> <a name="importExistingResourcesInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResourcesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `quotaValidationInput`<sup>Optional</sup> <a name="quotaValidationInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput"></a>

```java
public java.lang.String getQuotaValidationInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `terraformBlueprintInput`<sup>Optional</sup> <a name="terraformBlueprintInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput"></a>

```java
public ConfigDeploymentTerraformBlueprint getTerraformBlueprintInput();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `tfVersionConstraintInput`<sup>Optional</sup> <a name="tfVersionConstraintInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput"></a>

```java
public java.lang.String getTfVersionConstraintInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput"></a>

```java
public IResolvable|ConfigDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---

##### `workerPoolInput`<sup>Optional</sup> <a name="workerPoolInput" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput"></a>

```java
public java.lang.String getWorkerPoolInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `artifactsGcsBucket`<sup>Required</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket"></a>

```java
public java.lang.String getArtifactsGcsBucket();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importExistingResources`<sup>Required</sup> <a name="importExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `quotaValidation`<sup>Required</sup> <a name="quotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation"></a>

```java
public java.lang.String getQuotaValidation();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `tfVersionConstraint`<sup>Required</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint"></a>

```java
public java.lang.String getTfVersionConstraint();
```

- *Type:* java.lang.String

---

##### `workerPool`<sup>Required</sup> <a name="workerPool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeploymentConfig <a name="ConfigDeploymentConfig" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentConfig;

ConfigDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .serviceAccount(java.lang.String)
    .terraformBlueprint(ConfigDeploymentTerraformBlueprint)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .artifactsGcsBucket(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .forceDestroy(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .importExistingResources(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .quotaValidation(java.lang.String)
//  .tfVersionConstraint(java.lang.String)
//  .timeouts(ConfigDeploymentTimeouts)
//  .workerPool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name">name</a></code> | <code>java.lang.String</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint">terraformBlueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket">artifactsGcsBucket</a></code> | <code>java.lang.String</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#id ConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources">importExistingResources</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#project ConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation">quotaValidation</a></code> | <code>java.lang.String</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint">tfVersionConstraint</a></code> | <code>java.lang.String</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool">workerPool</a></code> | <code>java.lang.String</code> | Custom Cloud Build worker pool resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#location ConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#name ConfigDeployment#name}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}

---

##### `terraformBlueprint`<sup>Required</sup> <a name="terraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint"></a>

```java
public ConfigDeploymentTerraformBlueprint getTerraformBlueprint();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}

---

##### `artifactsGcsBucket`<sup>Optional</sup> <a name="artifactsGcsBucket" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```java
public java.lang.String getArtifactsGcsBucket();
```

- *Type:* java.lang.String

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy"></a>

```java
public java.lang.Boolean|IResolvable getForceDestroy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#id ConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importExistingResources`<sup>Optional</sup> <a name="importExistingResources" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources"></a>

```java
public java.lang.Boolean|IResolvable getImportExistingResources();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#labels ConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#project ConfigDeployment#project}.

---

##### `quotaValidation`<sup>Optional</sup> <a name="quotaValidation" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation"></a>

```java
public java.lang.String getQuotaValidation();
```

- *Type:* java.lang.String

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}

---

##### `tfVersionConstraint`<sup>Optional</sup> <a name="tfVersionConstraint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint"></a>

```java
public java.lang.String getTfVersionConstraint();
```

- *Type:* java.lang.String

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts"></a>

```java
public ConfigDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}

---

##### `workerPool`<sup>Optional</sup> <a name="workerPool" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool"></a>

```java
public java.lang.String getWorkerPool();
```

- *Type:* java.lang.String

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}

---

### ConfigDeploymentTerraformBlueprint <a name="ConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprint;

ConfigDeploymentTerraformBlueprint.builder()
//  .gcsSource(java.lang.String)
//  .gitSource(ConfigDeploymentTerraformBlueprintGitSource)
//  .inputValues(IResolvable|java.util.List<ConfigDeploymentTerraformBlueprintInputValues>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource">gcsSource</a></code> | <code>java.lang.String</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues">inputValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>></code> | input_values block. |

---

##### `gcsSource`<sup>Optional</sup> <a name="gcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```java
public java.lang.String getGcsSource();
```

- *Type:* java.lang.String

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#gcs_source ConfigDeployment#gcs_source}

---

##### `gitSource`<sup>Optional</sup> <a name="gitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```java
public ConfigDeploymentTerraformBlueprintGitSource getGitSource();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#git_source ConfigDeployment#git_source}

---

##### `inputValues`<sup>Optional</sup> <a name="inputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```java
public IResolvable|java.util.List<ConfigDeploymentTerraformBlueprintInputValues> getInputValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>>

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#input_values ConfigDeployment#input_values}

---

### ConfigDeploymentTerraformBlueprintGitSource <a name="ConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprintGitSource;

ConfigDeploymentTerraformBlueprintGitSource.builder()
    .repo(java.lang.String)
//  .directory(java.lang.String)
//  .ref(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo">repo</a></code> | <code>java.lang.String</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory">directory</a></code> | <code>java.lang.String</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref">ref</a></code> | <code>java.lang.String</code> | Git reference (branch or tag). |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#repo ConfigDeployment#repo}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#directory ConfigDeployment#directory}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#ref ConfigDeployment#ref}

---

### ConfigDeploymentTerraformBlueprintInputValues <a name="ConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprintInputValues;

ConfigDeploymentTerraformBlueprintInputValues.builder()
    .inputValue(java.lang.String)
    .variableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue">inputValue</a></code> | <code>java.lang.String</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName">variableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}. |

---

##### `inputValue`<sup>Required</sup> <a name="inputValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```java
public java.lang.String getInputValue();
```

- *Type:* java.lang.String

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#input_value ConfigDeployment#input_value}

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```java
public java.lang.String getVariableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}.

---

### ConfigDeploymentTimeouts <a name="ConfigDeploymentTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTimeouts;

ConfigDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#create ConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#delete ConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#update ConfigDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#create ConfigDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#delete ConfigDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/config_deployment#update ConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="ConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference;

new ConfigDeploymentTerraformBlueprintGitSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">resetRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```java
public void resetDirectory()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```java
public void resetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">directoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">repoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">directory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">repo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```java
public java.lang.String getDirectoryInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```java
public java.lang.String getRepoInput();
```

- *Type:* java.lang.String

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```java
public java.lang.String getDirectory();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```java
public java.lang.String getRepo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```java
public ConfigDeploymentTerraformBlueprintGitSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---


### ConfigDeploymentTerraformBlueprintInputValuesList <a name="ConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprintInputValuesList;

new ConfigDeploymentTerraformBlueprintInputValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```java
public ConfigDeploymentTerraformBlueprintInputValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ConfigDeploymentTerraformBlueprintInputValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>>

---


### ConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="ConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference;

new ConfigDeploymentTerraformBlueprintInputValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">inputValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">variableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">inputValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">variableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputValueInput`<sup>Optional</sup> <a name="inputValueInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```java
public java.lang.String getInputValueInput();
```

- *Type:* java.lang.String

---

##### `variableNameInput`<sup>Optional</sup> <a name="variableNameInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```java
public java.lang.String getVariableNameInput();
```

- *Type:* java.lang.String

---

##### `inputValue`<sup>Required</sup> <a name="inputValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```java
public java.lang.String getInputValue();
```

- *Type:* java.lang.String

---

##### `variableName`<sup>Required</sup> <a name="variableName" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```java
public java.lang.String getVariableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigDeploymentTerraformBlueprintInputValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>

---


### ConfigDeploymentTerraformBlueprintOutputReference <a name="ConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTerraformBlueprintOutputReference;

new ConfigDeploymentTerraformBlueprintOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource">putGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues">putInputValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">resetGcsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">resetGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">resetInputValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGitSource` <a name="putGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```java
public void putGitSource(ConfigDeploymentTerraformBlueprintGitSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `putInputValues` <a name="putInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```java
public void putInputValues(IResolvable|java.util.List<ConfigDeploymentTerraformBlueprintInputValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>>

---

##### `resetGcsSource` <a name="resetGcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```java
public void resetGcsSource()
```

##### `resetGitSource` <a name="resetGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```java
public void resetGitSource()
```

##### `resetInputValues` <a name="resetInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```java
public void resetInputValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">gitSource</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">inputValues</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">gcsSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">gitSourceInput</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">inputValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">gcsSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gitSource`<sup>Required</sup> <a name="gitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```java
public ConfigDeploymentTerraformBlueprintGitSourceOutputReference getGitSource();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `inputValues`<sup>Required</sup> <a name="inputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```java
public ConfigDeploymentTerraformBlueprintInputValuesList getInputValues();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `gcsSourceInput`<sup>Optional</sup> <a name="gcsSourceInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```java
public java.lang.String getGcsSourceInput();
```

- *Type:* java.lang.String

---

##### `gitSourceInput`<sup>Optional</sup> <a name="gitSourceInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```java
public ConfigDeploymentTerraformBlueprintGitSource getGitSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `inputValuesInput`<sup>Optional</sup> <a name="inputValuesInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```java
public IResolvable|java.util.List<ConfigDeploymentTerraformBlueprintInputValues> getInputValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>>

---

##### `gcsSource`<sup>Required</sup> <a name="gcsSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```java
public java.lang.String getGcsSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```java
public ConfigDeploymentTerraformBlueprint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---


### ConfigDeploymentTimeoutsOutputReference <a name="ConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.config_deployment.ConfigDeploymentTimeoutsOutputReference;

new ConfigDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ConfigDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---



