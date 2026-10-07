# `bigqueryDataTransferDataSourceEnrollment` Submodule <a name="`bigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferDataSourceEnrollment <a name="BigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_source_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryDataTransferDataSourceEnrollmentTimeouts = None,
  unenroll_location: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dataSourceId">data_source_id</a></code> | <code>str</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.unenrollLocation">unenroll_location</a></code> | <code>str</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.dataSourceId"></a>

- *Type:* str

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#data_source_id BigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#deletion_policy BigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#timeouts BigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenroll_location`<sup>Optional</sup> <a name="unenroll_location" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.Initializer.parameter.unenrollLocation"></a>

- *Type:* str

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#unenroll_location BigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">reset_unenroll_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unenroll_location` <a name="reset_unenroll_location" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```python
def reset_unenroll_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigqueryDataTransferDataSourceEnrollment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">data_refresh_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">default_data_refresh_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">default_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl">help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">manual_runs_disabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">minimum_schedule_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">supports_custom_schedule</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">update_deadline_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">data_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">unenroll_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">unenroll_location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `data_refresh_type`<sup>Required</sup> <a name="data_refresh_type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```python
data_refresh_type: str
```

- *Type:* str

---

##### `default_data_refresh_window_days`<sup>Required</sup> <a name="default_data_refresh_window_days" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```python
default_data_refresh_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_schedule`<sup>Required</sup> <a name="default_schedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```python
default_schedule: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `help_url`<sup>Required</sup> <a name="help_url" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```python
help_url: str
```

- *Type:* str

---

##### `manual_runs_disabled`<sup>Required</sup> <a name="manual_runs_disabled" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```python
manual_runs_disabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `minimum_schedule_interval`<sup>Required</sup> <a name="minimum_schedule_interval" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```python
minimum_schedule_interval: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```python
parameters: BigqueryDataTransferDataSourceEnrollmentParametersList
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList">BigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supports_custom_schedule`<sup>Required</sup> <a name="supports_custom_schedule" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```python
supports_custom_schedule: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```python
timeouts: BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `update_deadline_seconds`<sup>Required</sup> <a name="update_deadline_seconds" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```python
update_deadline_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_source_id_input`<sup>Optional</sup> <a name="data_source_id_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```python
data_source_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `unenroll_location_input`<sup>Optional</sup> <a name="unenroll_location_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```python
unenroll_location_input: str
```

- *Type:* str

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `unenroll_location`<sup>Required</sup> <a name="unenroll_location" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```python
unenroll_location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferDataSourceEnrollmentConfig <a name="BigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_source_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: BigqueryDataTransferDataSourceEnrollmentTimeouts = None,
  unenroll_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">data_source_id</a></code> | <code>str</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">unenroll_location</a></code> | <code>str</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#data_source_id BigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#deletion_policy BigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#id BigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#project BigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```python
timeouts: BigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#timeouts BigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenroll_location`<sup>Optional</sup> <a name="unenroll_location" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```python
unenroll_location: str
```

- *Type:* str

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#unenroll_location BigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### BigqueryDataTransferDataSourceEnrollmentParameters <a name="BigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters()
```


### BigqueryDataTransferDataSourceEnrollmentTimeouts <a name="BigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#create BigqueryDataTransferDataSourceEnrollment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/bigquery_data_transfer_data_source_enrollment#delete BigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferDataSourceEnrollmentParametersList <a name="BigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">deprecated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">immutable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">max_list_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">param_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">validation_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">validation_help_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">validation_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```python
deprecated: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```python
immutable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_list_size`<sup>Required</sup> <a name="max_list_size" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```python
max_list_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `param_id`<sup>Required</sup> <a name="param_id" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```python
param_id: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation_description`<sup>Required</sup> <a name="validation_description" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```python
validation_description: str
```

- *Type:* str

---

##### `validation_help_url`<sup>Required</sup> <a name="validation_help_url" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```python
validation_help_url: str
```

- *Type:* str

---

##### `validation_regex`<sup>Required</sup> <a name="validation_regex" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```python
validation_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```python
internal_value: BigqueryDataTransferDataSourceEnrollmentParameters
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentParameters">BigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigquery_data_transfer_data_source_enrollment

bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigqueryDataTransferDataSourceEnrollmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigqueryDataTransferDataSourceEnrollment.BigqueryDataTransferDataSourceEnrollmentTimeouts">BigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---



