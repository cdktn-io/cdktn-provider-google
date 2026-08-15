# `iamFolderAccessPolicy` Submodule <a name="`iamFolderAccessPolicy` Submodule" id="@cdktn/provider-google.iamFolderAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamFolderAccessPolicy <a name="IamFolderAccessPolicy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy google_iam_folder_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_id: str,
  folder: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  details: IamFolderAccessPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: IamFolderAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.accessPolicyId">access_policy_id</a></code> | <code>str</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.folder">folder</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#id IamFolderAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.accessPolicyId"></a>

- *Type:* str

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#access_policy_id IamFolderAccessPolicy#access_policy_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.folder"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#folder IamFolderAccessPolicy#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#location IamFolderAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#annotations IamFolderAccessPolicy#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#deletion_policy IamFolderAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#details IamFolderAccessPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#display_name IamFolderAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#id IamFolderAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#timeouts IamFolderAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putDetails"></a>

```python
def put_details(
  rules: IResolvable | typing.List[IamFolderAccessPolicyDetailsRules]
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putDetails.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#rules IamFolderAccessPolicy#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#create IamFolderAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#delete IamFolderAccessPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#update IamFolderAccessPolicy#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_details` <a name="reset_details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IamFolderAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isConstruct"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformElement"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformResource"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IamFolderAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamFolderAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamFolderAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamFolderAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference">IamFolderAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference">IamFolderAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyIdInput">access_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.detailsInput">details_input</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folderInput">folder_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folder">folder</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.details"></a>

```python
details: IamFolderAccessPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference">IamFolderAccessPolicyDetailsOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeouts"></a>

```python
timeouts: IamFolderAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference">IamFolderAccessPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_policy_id_input`<sup>Optional</sup> <a name="access_policy_id_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyIdInput"></a>

```python
access_policy_id_input: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.detailsInput"></a>

```python
details_input: IamFolderAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `folder_input`<sup>Optional</sup> <a name="folder_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folderInput"></a>

```python
folder_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IamFolderAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.folder"></a>

```python
folder: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamFolderAccessPolicyConfig <a name="IamFolderAccessPolicyConfig" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_policy_id: str,
  folder: str,
  location: str,
  annotations: typing.Mapping[str] = None,
  deletion_policy: str = None,
  details: IamFolderAccessPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: IamFolderAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.folder">folder</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#id IamFolderAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#access_policy_id IamFolderAccessPolicy#access_policy_id}

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.folder"></a>

```python
folder: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#folder IamFolderAccessPolicy#folder}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#location IamFolderAccessPolicy#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#annotations IamFolderAccessPolicy#annotations}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#deletion_policy IamFolderAccessPolicy#deletion_policy}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.details"></a>

```python
details: IamFolderAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#details IamFolderAccessPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#display_name IamFolderAccessPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#id IamFolderAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: IamFolderAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#timeouts IamFolderAccessPolicy#timeouts}

---

### IamFolderAccessPolicyDetails <a name="IamFolderAccessPolicyDetails" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetails(
  rules: IResolvable | typing.List[IamFolderAccessPolicyDetailsRules]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails.property.rules"></a>

```python
rules: IResolvable | typing.List[IamFolderAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#rules IamFolderAccessPolicy#rules}

---

### IamFolderAccessPolicyDetailsRules <a name="IamFolderAccessPolicyDetailsRules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules(
  effect: str,
  operation: IamFolderAccessPolicyDetailsRulesOperation,
  principals: typing.List[str],
  conditions: IResolvable | typing.List[IamFolderAccessPolicyDetailsRulesConditions] = None,
  description: str = None,
  excluded_principals: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.effect">effect</a></code> | <code>str</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.principals">principals</a></code> | <code>typing.List[str]</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.description">description</a></code> | <code>str</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.excludedPrincipals">excluded_principals</a></code> | <code>typing.List[str]</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.effect"></a>

```python
effect: str
```

- *Type:* str

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#effect IamFolderAccessPolicy#effect}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.operation"></a>

```python
operation: IamFolderAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#operation IamFolderAccessPolicy#operation}

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#principals IamFolderAccessPolicy#principals}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.conditions"></a>

```python
conditions: IResolvable | typing.List[IamFolderAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#conditions IamFolderAccessPolicy#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.description"></a>

```python
description: str
```

- *Type:* str

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#description IamFolderAccessPolicy#description}

---

##### `excluded_principals`<sup>Optional</sup> <a name="excluded_principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```python
excluded_principals: typing.List[str]
```

- *Type:* typing.List[str]

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#excluded_principals IamFolderAccessPolicy#excluded_principals}

---

### IamFolderAccessPolicyDetailsRulesConditions <a name="IamFolderAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions(
  service: str,
  expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#service IamFolderAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#service IamFolderAccessPolicy#service}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#expression IamFolderAccessPolicy#expression}

---

### IamFolderAccessPolicyDetailsRulesOperation <a name="IamFolderAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation(
  permissions: typing.List[str],
  excluded_permissions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.excludedPermissions">excluded_permissions</a></code> | <code>typing.List[str]</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#permissions IamFolderAccessPolicy#permissions}

---

##### `excluded_permissions`<sup>Optional</sup> <a name="excluded_permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```python
excluded_permissions: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#excluded_permissions IamFolderAccessPolicy#excluded_permissions}

---

### IamFolderAccessPolicyTimeouts <a name="IamFolderAccessPolicyTimeouts" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#create IamFolderAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#delete IamFolderAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#update IamFolderAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#create IamFolderAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#delete IamFolderAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#update IamFolderAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamFolderAccessPolicyDetailsOutputReference <a name="IamFolderAccessPolicyDetailsOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[IamFolderAccessPolicyDetailsRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList">IamFolderAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rules"></a>

```python
rules: IamFolderAccessPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList">IamFolderAccessPolicyDetailsRulesList</a>

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[IamFolderAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IamFolderAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetails">IamFolderAccessPolicyDetails</a>

---


### IamFolderAccessPolicyDetailsRulesConditionsList <a name="IamFolderAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamFolderAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IamFolderAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]

---


### IamFolderAccessPolicyDetailsRulesConditionsOutputReference <a name="IamFolderAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamFolderAccessPolicyDetailsRulesConditions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>

---


### IamFolderAccessPolicyDetailsRulesList <a name="IamFolderAccessPolicyDetailsRulesList" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamFolderAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IamFolderAccessPolicyDetailsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>]

---


### IamFolderAccessPolicyDetailsRulesOperationOutputReference <a name="IamFolderAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">reset_excluded_permissions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_permissions` <a name="reset_excluded_permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```python
def reset_excluded_permissions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">excluded_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">excluded_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_permissions_input`<sup>Optional</sup> <a name="excluded_permissions_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```python
excluded_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_permissions`<sup>Required</sup> <a name="excluded_permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```python
excluded_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```python
internal_value: IamFolderAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

---


### IamFolderAccessPolicyDetailsRulesOutputReference <a name="IamFolderAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation">put_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">reset_excluded_principals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```python
def put_conditions(
  value: IResolvable | typing.List[IamFolderAccessPolicyDetailsRulesConditions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]

---

##### `put_operation` <a name="put_operation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```python
def put_operation(
  permissions: typing.List[str],
  excluded_permissions: typing.List[str] = None
) -> None
```

###### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation.parameter.permissions"></a>

- *Type:* typing.List[str]

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#permissions IamFolderAccessPolicy#permissions}

---

###### `excluded_permissions`<sup>Optional</sup> <a name="excluded_permissions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.putOperation.parameter.excludedPermissions"></a>

- *Type:* typing.List[str]

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/iam_folder_access_policy#excluded_permissions IamFolderAccessPolicy#excluded_permissions}

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_excluded_principals` <a name="reset_excluded_principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```python
def reset_excluded_principals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList">IamFolderAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operation">operation</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference">IamFolderAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">excluded_principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operationInput">operation_input</a></code> | <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principalsInput">principals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">excluded_principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```python
conditions: IamFolderAccessPolicyDetailsRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditionsList">IamFolderAccessPolicyDetailsRulesConditionsList</a>

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```python
operation: IamFolderAccessPolicyDetailsRulesOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperationOutputReference">IamFolderAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```python
conditions_input: IResolvable | typing.List[IamFolderAccessPolicyDetailsRulesConditions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesConditions">IamFolderAccessPolicyDetailsRulesConditions</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `excluded_principals_input`<sup>Optional</sup> <a name="excluded_principals_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```python
excluded_principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```python
operation_input: IamFolderAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOperation">IamFolderAccessPolicyDetailsRulesOperation</a>

---

##### `principals_input`<sup>Optional</sup> <a name="principals_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```python
principals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `excluded_principals`<sup>Required</sup> <a name="excluded_principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```python
excluded_principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamFolderAccessPolicyDetailsRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyDetailsRules">IamFolderAccessPolicyDetailsRules</a>

---


### IamFolderAccessPolicyTimeoutsOutputReference <a name="IamFolderAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import iam_folder_access_policy

iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamFolderAccessPolicyTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.iamFolderAccessPolicy.IamFolderAccessPolicyTimeouts">IamFolderAccessPolicyTimeouts</a>

---



