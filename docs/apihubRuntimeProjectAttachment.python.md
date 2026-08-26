# `apihubRuntimeProjectAttachment` Submodule <a name="`apihubRuntimeProjectAttachment` Submodule" id="@cdktn/provider-google.apihubRuntimeProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubRuntimeProjectAttachment <a name="ApihubRuntimeProjectAttachment" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment google_apihub_runtime_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment(
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
  runtime_project: str,
  runtime_project_attachment_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: ApihubRuntimeProjectAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProject">runtime_project</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProjectAttachmentId">runtime_project_attachment_id</a></code> | <code>str</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#id ApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#project ApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#location ApihubRuntimeProjectAttachment#location}

---

##### `runtime_project`<sup>Required</sup> <a name="runtime_project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProject"></a>

- *Type:* str

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#runtime_project ApihubRuntimeProjectAttachment#runtime_project}

---

##### `runtime_project_attachment_id`<sup>Required</sup> <a name="runtime_project_attachment_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.runtimeProjectAttachmentId"></a>

- *Type:* str

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#runtime_project_attachment_id ApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#deletion_policy ApihubRuntimeProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#id ApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#project ApihubRuntimeProjectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#timeouts ApihubRuntimeProjectAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#create ApihubRuntimeProjectAttachment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#delete ApihubRuntimeProjectAttachment#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isConstruct"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformElement"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformResource"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApihubRuntimeProjectAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApihubRuntimeProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApihubRuntimeProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference">ApihubRuntimeProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput">runtime_project_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectInput">runtime_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProject">runtime_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId">runtime_project_attachment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeouts"></a>

```python
timeouts: ApihubRuntimeProjectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference">ApihubRuntimeProjectAttachmentTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_project_attachment_id_input`<sup>Optional</sup> <a name="runtime_project_attachment_id_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput"></a>

```python
runtime_project_attachment_id_input: str
```

- *Type:* str

---

##### `runtime_project_input`<sup>Optional</sup> <a name="runtime_project_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectInput"></a>

```python
runtime_project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApihubRuntimeProjectAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime_project`<sup>Required</sup> <a name="runtime_project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProject"></a>

```python
runtime_project: str
```

- *Type:* str

---

##### `runtime_project_attachment_id`<sup>Required</sup> <a name="runtime_project_attachment_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId"></a>

```python
runtime_project_attachment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubRuntimeProjectAttachmentConfig <a name="ApihubRuntimeProjectAttachmentConfig" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  runtime_project: str,
  runtime_project_attachment_id: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: ApihubRuntimeProjectAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProject">runtime_project</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId">runtime_project_attachment_id</a></code> | <code>str</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#id ApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#project ApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#location ApihubRuntimeProjectAttachment#location}

---

##### `runtime_project`<sup>Required</sup> <a name="runtime_project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProject"></a>

```python
runtime_project: str
```

- *Type:* str

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#runtime_project ApihubRuntimeProjectAttachment#runtime_project}

---

##### `runtime_project_attachment_id`<sup>Required</sup> <a name="runtime_project_attachment_id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId"></a>

```python
runtime_project_attachment_id: str
```

- *Type:* str

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#runtime_project_attachment_id ApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#deletion_policy ApihubRuntimeProjectAttachment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#id ApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#project ApihubRuntimeProjectAttachment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.timeouts"></a>

```python
timeouts: ApihubRuntimeProjectAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#timeouts ApihubRuntimeProjectAttachment#timeouts}

---

### ApihubRuntimeProjectAttachmentTimeouts <a name="ApihubRuntimeProjectAttachmentTimeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#create ApihubRuntimeProjectAttachment#create}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#delete ApihubRuntimeProjectAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#create ApihubRuntimeProjectAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#delete ApihubRuntimeProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubRuntimeProjectAttachmentTimeoutsOutputReference <a name="ApihubRuntimeProjectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apihub_runtime_project_attachment

apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApihubRuntimeProjectAttachmentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

---



