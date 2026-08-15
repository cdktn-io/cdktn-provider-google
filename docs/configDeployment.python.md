# `configDeployment` Submodule <a name="`configDeployment` Submodule" id="@cdktn/provider-google.configDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigDeployment <a name="ConfigDeployment" id="@cdktn/provider-google.configDeployment.ConfigDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment google_config_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeployment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  service_account: str,
  terraform_blueprint: ConfigDeploymentTerraformBlueprint,
  annotations: typing.Mapping[str] = None,
  artifacts_gcs_bucket: str = None,
  deletion_policy: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  import_existing_resources: bool | IResolvable = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  quota_validation: str = None,
  tf_version_constraint: str = None,
  timeouts: ConfigDeploymentTimeouts = None,
  worker_pool: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.terraformBlueprint">terraform_blueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.artifactsGcsBucket">artifacts_gcs_bucket</a></code> | <code>str</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#id ConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#project ConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.quotaValidation">quota_validation</a></code> | <code>str</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.tfVersionConstraint">tf_version_constraint</a></code> | <code>str</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.workerPool">worker_pool</a></code> | <code>str</code> | Custom Cloud Build worker pool resource name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#location ConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.name"></a>

- *Type:* str

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#name ConfigDeployment#name}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}

---

##### `terraform_blueprint`<sup>Required</sup> <a name="terraform_blueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.terraformBlueprint"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}

---

##### `artifacts_gcs_bucket`<sup>Optional</sup> <a name="artifacts_gcs_bucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.artifactsGcsBucket"></a>

- *Type:* str

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#id ConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_existing_resources`<sup>Optional</sup> <a name="import_existing_resources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.importExistingResources"></a>

- *Type:* bool | cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#labels ConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#project ConfigDeployment#project}.

---

##### `quota_validation`<sup>Optional</sup> <a name="quota_validation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.quotaValidation"></a>

- *Type:* str

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}

---

##### `tf_version_constraint`<sup>Optional</sup> <a name="tf_version_constraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.tfVersionConstraint"></a>

- *Type:* str

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.Initializer.parameter.workerPool"></a>

- *Type:* str

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint">put_terraform_blueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket">reset_artifacts_gcs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources">reset_import_existing_resources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation">reset_quota_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint">reset_tf_version_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool">reset_worker_pool</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.configDeployment.ConfigDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.configDeployment.ConfigDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.configDeployment.ConfigDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.configDeployment.ConfigDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_terraform_blueprint` <a name="put_terraform_blueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint"></a>

```python
def put_terraform_blueprint(
  gcs_source: str = None,
  git_source: ConfigDeploymentTerraformBlueprintGitSource = None,
  input_values: IResolvable | typing.List[ConfigDeploymentTerraformBlueprintInputValues] = None
) -> None
```

###### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint.parameter.gcsSource"></a>

- *Type:* str

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#gcs_source ConfigDeployment#gcs_source}

---

###### `git_source`<sup>Optional</sup> <a name="git_source" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint.parameter.gitSource"></a>

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#git_source ConfigDeployment#git_source}

---

###### `input_values`<sup>Optional</sup> <a name="input_values" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTerraformBlueprint.parameter.inputValues"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#input_values ConfigDeployment#input_values}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#create ConfigDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#delete ConfigDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.configDeployment.ConfigDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#update ConfigDeployment#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_artifacts_gcs_bucket` <a name="reset_artifacts_gcs_bucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetArtifactsGcsBucket"></a>

```python
def reset_artifacts_gcs_bucket() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_existing_resources` <a name="reset_import_existing_resources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetImportExistingResources"></a>

```python
def reset_import_existing_resources() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_quota_validation` <a name="reset_quota_validation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetQuotaValidation"></a>

```python
def reset_quota_validation() -> None
```

##### `reset_tf_version_constraint` <a name="reset_tf_version_constraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTfVersionConstraint"></a>

```python
def reset_tf_version_constraint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_pool` <a name="reset_worker_pool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.resetWorkerPool"></a>

```python
def reset_worker_pool() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.configDeployment.ConfigDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision">latest_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint">terraform_blueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput">artifacts_gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput">import_existing_resources_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput">quota_validation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput">terraform_blueprint_input</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput">tf_version_constraint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput">worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket">artifacts_gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation">quota_validation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint">tf_version_constraint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `latest_revision`<sup>Required</sup> <a name="latest_revision" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.latestRevision"></a>

```python
latest_revision: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_blueprint`<sup>Required</sup> <a name="terraform_blueprint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprint"></a>

```python
terraform_blueprint: ConfigDeploymentTerraformBlueprintOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference">ConfigDeploymentTerraformBlueprintOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeouts"></a>

```python
timeouts: ConfigDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference">ConfigDeploymentTimeoutsOutputReference</a>

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `artifacts_gcs_bucket_input`<sup>Optional</sup> <a name="artifacts_gcs_bucket_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucketInput"></a>

```python
artifacts_gcs_bucket_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_existing_resources_input`<sup>Optional</sup> <a name="import_existing_resources_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResourcesInput"></a>

```python
import_existing_resources_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `quota_validation_input`<sup>Optional</sup> <a name="quota_validation_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidationInput"></a>

```python
quota_validation_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `terraform_blueprint_input`<sup>Optional</sup> <a name="terraform_blueprint_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.terraformBlueprintInput"></a>

```python
terraform_blueprint_input: ConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---

##### `tf_version_constraint_input`<sup>Optional</sup> <a name="tf_version_constraint_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraintInput"></a>

```python
tf_version_constraint_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ConfigDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---

##### `worker_pool_input`<sup>Optional</sup> <a name="worker_pool_input" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPoolInput"></a>

```python
worker_pool_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `artifacts_gcs_bucket`<sup>Required</sup> <a name="artifacts_gcs_bucket" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.artifactsGcsBucket"></a>

```python
artifacts_gcs_bucket: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_existing_resources`<sup>Required</sup> <a name="import_existing_resources" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.importExistingResources"></a>

```python
import_existing_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `quota_validation`<sup>Required</sup> <a name="quota_validation" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.quotaValidation"></a>

```python
quota_validation: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `tf_version_constraint`<sup>Required</sup> <a name="tf_version_constraint" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfVersionConstraint"></a>

```python
tf_version_constraint: str
```

- *Type:* str

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.configDeployment.ConfigDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigDeploymentConfig <a name="ConfigDeploymentConfig" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  service_account: str,
  terraform_blueprint: ConfigDeploymentTerraformBlueprint,
  annotations: typing.Mapping[str] = None,
  artifacts_gcs_bucket: str = None,
  deletion_policy: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  import_existing_resources: bool | IResolvable = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  quota_validation: str = None,
  tf_version_constraint: str = None,
  timeouts: ConfigDeploymentTimeouts = None,
  worker_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name">name</a></code> | <code>str</code> | The user-specified ID of the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Required. User-specified Service Account (SA) credentials to be used when actuating resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint">terraform_blueprint</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | terraform_blueprint block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Arbitrary key-value metadata storage. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket">artifacts_gcs_bucket</a></code> | <code>str</code> | Location for Cloud Build logs and artifacts. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, deletes the deployment and its nested resources. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#id ConfigDeployment#id}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources">import_existing_resources</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, attempts to automatically import resources on 409 conflict. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. User-defined metadata for the deployment. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#project ConfigDeployment#project}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation">quota_validation</a></code> | <code>str</code> | Controls quota checks. Possible values: ["ENABLED", "ENFORCED"]. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint">tf_version_constraint</a></code> | <code>str</code> | Optional constraint on the Terraform version. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool">worker_pool</a></code> | <code>str</code> | Custom Cloud Build worker pool resource name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#location ConfigDeployment#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The user-specified ID of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#name ConfigDeployment#name}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Required. User-specified Service Account (SA) credentials to be used when actuating resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#service_account ConfigDeployment#service_account}

---

##### `terraform_blueprint`<sup>Required</sup> <a name="terraform_blueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.terraformBlueprint"></a>

```python
terraform_blueprint: ConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

terraform_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#terraform_blueprint ConfigDeployment#terraform_blueprint}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Arbitrary key-value metadata storage.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#annotations ConfigDeployment#annotations}

---

##### `artifacts_gcs_bucket`<sup>Optional</sup> <a name="artifacts_gcs_bucket" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.artifactsGcsBucket"></a>

```python
artifacts_gcs_bucket: str
```

- *Type:* str

Location for Cloud Build logs and artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#artifacts_gcs_bucket ConfigDeployment#artifacts_gcs_bucket}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#deletion_policy ConfigDeployment#deletion_policy}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, deletes the deployment and its nested resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#force_destroy ConfigDeployment#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#id ConfigDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_existing_resources`<sup>Optional</sup> <a name="import_existing_resources" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.importExistingResources"></a>

```python
import_existing_resources: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, attempts to automatically import resources on 409 conflict.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#import_existing_resources ConfigDeployment#import_existing_resources}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User-defined metadata for the deployment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#labels ConfigDeployment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#project ConfigDeployment#project}.

---

##### `quota_validation`<sup>Optional</sup> <a name="quota_validation" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.quotaValidation"></a>

```python
quota_validation: str
```

- *Type:* str

Controls quota checks. Possible values: ["ENABLED", "ENFORCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#quota_validation ConfigDeployment#quota_validation}

---

##### `tf_version_constraint`<sup>Optional</sup> <a name="tf_version_constraint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.tfVersionConstraint"></a>

```python
tf_version_constraint: str
```

- *Type:* str

Optional constraint on the Terraform version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#tf_version_constraint ConfigDeployment#tf_version_constraint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.timeouts"></a>

```python
timeouts: ConfigDeploymentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#timeouts ConfigDeployment#timeouts}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktn/provider-google.configDeployment.ConfigDeploymentConfig.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

Custom Cloud Build worker pool resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#worker_pool ConfigDeployment#worker_pool}

---

### ConfigDeploymentTerraformBlueprint <a name="ConfigDeploymentTerraformBlueprint" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprint(
  gcs_source: str = None,
  git_source: ConfigDeploymentTerraformBlueprintGitSource = None,
  input_values: IResolvable | typing.List[ConfigDeploymentTerraformBlueprintInputValues] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource">gcs_source</a></code> | <code>str</code> | URI of a GCS object containing the zipped Terraform blueprint. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | git_source block. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues">input_values</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]</code> | input_values block. |

---

##### `gcs_source`<sup>Optional</sup> <a name="gcs_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gcsSource"></a>

```python
gcs_source: str
```

- *Type:* str

URI of a GCS object containing the zipped Terraform blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#gcs_source ConfigDeployment#gcs_source}

---

##### `git_source`<sup>Optional</sup> <a name="git_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.gitSource"></a>

```python
git_source: ConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

git_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#git_source ConfigDeployment#git_source}

---

##### `input_values`<sup>Optional</sup> <a name="input_values" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint.property.inputValues"></a>

```python
input_values: IResolvable | typing.List[ConfigDeploymentTerraformBlueprintInputValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]

input_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#input_values ConfigDeployment#input_values}

---

### ConfigDeploymentTerraformBlueprintGitSource <a name="ConfigDeploymentTerraformBlueprintGitSource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprintGitSource(
  repo: str,
  directory: str = None,
  ref: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo">repo</a></code> | <code>str</code> | Repository URL. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory">directory</a></code> | <code>str</code> | Subdirectory within the repo. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref">ref</a></code> | <code>str</code> | Git reference (branch or tag). |

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.repo"></a>

```python
repo: str
```

- *Type:* str

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#repo ConfigDeployment#repo}

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.directory"></a>

```python
directory: str
```

- *Type:* str

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#directory ConfigDeployment#directory}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource.property.ref"></a>

```python
ref: str
```

- *Type:* str

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#ref ConfigDeployment#ref}

---

### ConfigDeploymentTerraformBlueprintInputValues <a name="ConfigDeploymentTerraformBlueprintInputValues" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprintInputValues(
  input_value: str,
  variable_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue">input_value</a></code> | <code>str</code> | The value of the variable. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName">variable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}. |

---

##### `input_value`<sup>Required</sup> <a name="input_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.inputValue"></a>

```python
input_value: str
```

- *Type:* str

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#input_value ConfigDeployment#input_value}

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#variable_name ConfigDeployment#variable_name}.

---

### ConfigDeploymentTimeouts <a name="ConfigDeploymentTimeouts" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#create ConfigDeployment#create}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#delete ConfigDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#update ConfigDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#create ConfigDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#delete ConfigDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#update ConfigDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigDeploymentTerraformBlueprintGitSourceOutputReference <a name="ConfigDeploymentTerraformBlueprintGitSourceOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory">reset_directory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef">reset_ref</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory` <a name="reset_directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetDirectory"></a>

```python
def reset_directory() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput">directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory">directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_input`<sup>Optional</sup> <a name="directory_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directoryInput"></a>

```python
directory_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.directory"></a>

```python
directory: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference.property.internalValue"></a>

```python
internal_value: ConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---


### ConfigDeploymentTerraformBlueprintInputValuesList <a name="ConfigDeploymentTerraformBlueprintInputValuesList" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigDeploymentTerraformBlueprintInputValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigDeploymentTerraformBlueprintInputValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]

---


### ConfigDeploymentTerraformBlueprintInputValuesOutputReference <a name="ConfigDeploymentTerraformBlueprintInputValuesOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput">input_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput">variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue">input_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName">variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_value_input`<sup>Optional</sup> <a name="input_value_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValueInput"></a>

```python
input_value_input: str
```

- *Type:* str

---

##### `variable_name_input`<sup>Optional</sup> <a name="variable_name_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableNameInput"></a>

```python
variable_name_input: str
```

- *Type:* str

---

##### `input_value`<sup>Required</sup> <a name="input_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.inputValue"></a>

```python
input_value: str
```

- *Type:* str

---

##### `variable_name`<sup>Required</sup> <a name="variable_name" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.variableName"></a>

```python
variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigDeploymentTerraformBlueprintInputValues
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>

---


### ConfigDeploymentTerraformBlueprintOutputReference <a name="ConfigDeploymentTerraformBlueprintOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTerraformBlueprintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource">put_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues">put_input_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource">reset_gcs_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource">reset_git_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues">reset_input_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_git_source` <a name="put_git_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource"></a>

```python
def put_git_source(
  repo: str,
  directory: str = None,
  ref: str = None
) -> None
```

###### `repo`<sup>Required</sup> <a name="repo" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.repo"></a>

- *Type:* str

Repository URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#repo ConfigDeployment#repo}

---

###### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.directory"></a>

- *Type:* str

Subdirectory within the repo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#directory ConfigDeployment#directory}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putGitSource.parameter.ref"></a>

- *Type:* str

Git reference (branch or tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/config_deployment#ref ConfigDeployment#ref}

---

##### `put_input_values` <a name="put_input_values" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues"></a>

```python
def put_input_values(
  value: IResolvable | typing.List[ConfigDeploymentTerraformBlueprintInputValues]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.putInputValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]

---

##### `reset_gcs_source` <a name="reset_gcs_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGcsSource"></a>

```python
def reset_gcs_source() -> None
```

##### `reset_git_source` <a name="reset_git_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetGitSource"></a>

```python
def reset_git_source() -> None
```

##### `reset_input_values` <a name="reset_input_values" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.resetInputValues"></a>

```python
def reset_input_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource">git_source</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues">input_values</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput">gcs_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput">git_source_input</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput">input_values_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource">gcs_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `git_source`<sup>Required</sup> <a name="git_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSource"></a>

```python
git_source: ConfigDeploymentTerraformBlueprintGitSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSourceOutputReference">ConfigDeploymentTerraformBlueprintGitSourceOutputReference</a>

---

##### `input_values`<sup>Required</sup> <a name="input_values" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValues"></a>

```python
input_values: ConfigDeploymentTerraformBlueprintInputValuesList
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValuesList">ConfigDeploymentTerraformBlueprintInputValuesList</a>

---

##### `gcs_source_input`<sup>Optional</sup> <a name="gcs_source_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSourceInput"></a>

```python
gcs_source_input: str
```

- *Type:* str

---

##### `git_source_input`<sup>Optional</sup> <a name="git_source_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gitSourceInput"></a>

```python
git_source_input: ConfigDeploymentTerraformBlueprintGitSource
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintGitSource">ConfigDeploymentTerraformBlueprintGitSource</a>

---

##### `input_values_input`<sup>Optional</sup> <a name="input_values_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.inputValuesInput"></a>

```python
input_values_input: IResolvable | typing.List[ConfigDeploymentTerraformBlueprintInputValues]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintInputValues">ConfigDeploymentTerraformBlueprintInputValues</a>]

---

##### `gcs_source`<sup>Required</sup> <a name="gcs_source" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.gcsSource"></a>

```python
gcs_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprintOutputReference.property.internalValue"></a>

```python
internal_value: ConfigDeploymentTerraformBlueprint
```

- *Type:* <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTerraformBlueprint">ConfigDeploymentTerraformBlueprint</a>

---


### ConfigDeploymentTimeoutsOutputReference <a name="ConfigDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import config_deployment

configDeployment.ConfigDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.configDeployment.ConfigDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigDeploymentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.configDeployment.ConfigDeploymentTimeouts">ConfigDeploymentTimeouts</a>

---



