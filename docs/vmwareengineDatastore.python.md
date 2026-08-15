# `vmwareengineDatastore` Submodule <a name="`vmwareengineDatastore` Submodule" id="@cdktn/provider-google.vmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineDatastore <a name="VmwareengineDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastore(
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
  nfs_datastore: VmwareengineDatastoreNfsDatastore,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: VmwareengineDatastoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.name">name</a></code> | <code>str</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.nfsDatastore">nfs_datastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#location VmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.name"></a>

- *Type:* str

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#name VmwareengineDatastore#name}

---

##### `nfs_datastore`<sup>Required</sup> <a name="nfs_datastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.nfsDatastore"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#nfs_datastore VmwareengineDatastore#nfs_datastore}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#deletion_policy VmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#description VmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#timeouts VmwareengineDatastore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore">put_nfs_datastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_nfs_datastore` <a name="put_nfs_datastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore"></a>

```python
def put_nfs_datastore(
  google_file_service: VmwareengineDatastoreNfsDatastoreGoogleFileService = None,
  third_party_file_service: VmwareengineDatastoreNfsDatastoreThirdPartyFileService = None
) -> None
```

###### `google_file_service`<sup>Optional</sup> <a name="google_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore.parameter.googleFileService"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#google_file_service VmwareengineDatastore#google_file_service}

---

###### `third_party_file_service`<sup>Optional</sup> <a name="third_party_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore.parameter.thirdPartyFileService"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#third_party_file_service VmwareengineDatastore#third_party_file_service}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareengineDatastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters">clusters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore">nfs_datastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput">nfs_datastore_input</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters"></a>

```python
clusters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `nfs_datastore`<sup>Required</sup> <a name="nfs_datastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore"></a>

```python
nfs_datastore: VmwareengineDatastoreNfsDatastoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts"></a>

```python
timeouts: VmwareengineDatastoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nfs_datastore_input`<sup>Optional</sup> <a name="nfs_datastore_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput"></a>

```python
nfs_datastore_input: VmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VmwareengineDatastoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineDatastoreConfig <a name="VmwareengineDatastoreConfig" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  nfs_datastore: VmwareengineDatastoreNfsDatastore,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: VmwareengineDatastoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name">name</a></code> | <code>str</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore">nfs_datastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description">description</a></code> | <code>str</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#location VmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#name VmwareengineDatastore#name}

---

##### `nfs_datastore`<sup>Required</sup> <a name="nfs_datastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore"></a>

```python
nfs_datastore: VmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#nfs_datastore VmwareengineDatastore#nfs_datastore}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#deletion_policy VmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#description VmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts"></a>

```python
timeouts: VmwareengineDatastoreTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#timeouts VmwareengineDatastore#timeouts}

---

### VmwareengineDatastoreNfsDatastore <a name="VmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreNfsDatastore(
  google_file_service: VmwareengineDatastoreNfsDatastoreGoogleFileService = None,
  third_party_file_service: VmwareengineDatastoreNfsDatastoreThirdPartyFileService = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService">google_file_service</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">third_party_file_service</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `google_file_service`<sup>Optional</sup> <a name="google_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```python
google_file_service: VmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#google_file_service VmwareengineDatastore#google_file_service}

---

##### `third_party_file_service`<sup>Optional</sup> <a name="third_party_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```python
third_party_file_service: VmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#third_party_file_service VmwareengineDatastore#third_party_file_service}

---

### VmwareengineDatastoreNfsDatastoreGoogleFileService <a name="VmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService(
  filestore_instance: str = None,
  netapp_volume: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">filestore_instance</a></code> | <code>str</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">netapp_volume</a></code> | <code>str</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `filestore_instance`<sup>Optional</sup> <a name="filestore_instance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```python
filestore_instance: str
```

- *Type:* str

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#filestore_instance VmwareengineDatastore#filestore_instance}

---

##### `netapp_volume`<sup>Optional</sup> <a name="netapp_volume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```python
netapp_volume: str
```

- *Type:* str

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#netapp_volume VmwareengineDatastore#netapp_volume}

---

### VmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService(
  file_share: str,
  network: str,
  servers: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">file_share</a></code> | <code>str</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">network</a></code> | <code>str</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">servers</a></code> | <code>typing.List[str]</code> | Server IP addresses of the NFS file service. |

---

##### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```python
file_share: str
```

- *Type:* str

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#file_share VmwareengineDatastore#file_share}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```python
network: str
```

- *Type:* str

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#network VmwareengineDatastore#network}

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#servers VmwareengineDatastore#servers}

---

### VmwareengineDatastoreTimeouts <a name="VmwareengineDatastoreTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">reset_filestore_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">reset_netapp_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filestore_instance` <a name="reset_filestore_instance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```python
def reset_filestore_instance() -> None
```

##### `reset_netapp_volume` <a name="reset_netapp_volume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```python
def reset_netapp_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">filestore_instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">netapp_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">filestore_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">netapp_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filestore_instance_input`<sup>Optional</sup> <a name="filestore_instance_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```python
filestore_instance_input: str
```

- *Type:* str

---

##### `netapp_volume_input`<sup>Optional</sup> <a name="netapp_volume_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```python
netapp_volume_input: str
```

- *Type:* str

---

##### `filestore_instance`<sup>Required</sup> <a name="filestore_instance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```python
filestore_instance: str
```

- *Type:* str

---

##### `netapp_volume`<sup>Required</sup> <a name="netapp_volume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```python
netapp_volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### VmwareengineDatastoreNfsDatastoreOutputReference <a name="VmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">put_google_file_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">put_third_party_file_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">reset_google_file_service</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">reset_third_party_file_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_file_service` <a name="put_google_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```python
def put_google_file_service(
  filestore_instance: str = None,
  netapp_volume: str = None
) -> None
```

###### `filestore_instance`<sup>Optional</sup> <a name="filestore_instance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.filestoreInstance"></a>

- *Type:* str

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#filestore_instance VmwareengineDatastore#filestore_instance}

---

###### `netapp_volume`<sup>Optional</sup> <a name="netapp_volume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.netappVolume"></a>

- *Type:* str

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#netapp_volume VmwareengineDatastore#netapp_volume}

---

##### `put_third_party_file_service` <a name="put_third_party_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```python
def put_third_party_file_service(
  file_share: str,
  network: str,
  servers: typing.List[str]
) -> None
```

###### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.fileShare"></a>

- *Type:* str

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#file_share VmwareengineDatastore#file_share}

---

###### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.network"></a>

- *Type:* str

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#network VmwareengineDatastore#network}

---

###### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.servers"></a>

- *Type:* typing.List[str]

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/vmwareengine_datastore#servers VmwareengineDatastore#servers}

---

##### `reset_google_file_service` <a name="reset_google_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```python
def reset_google_file_service() -> None
```

##### `reset_third_party_file_service` <a name="reset_third_party_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```python
def reset_third_party_file_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">google_file_service</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">third_party_file_service</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">google_file_service_input</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">third_party_file_service_input</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_file_service`<sup>Required</sup> <a name="google_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```python
google_file_service: VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `third_party_file_service`<sup>Required</sup> <a name="third_party_file_service" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```python
third_party_file_service: VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `google_file_service_input`<sup>Optional</sup> <a name="google_file_service_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```python
google_file_service_input: VmwareengineDatastoreNfsDatastoreGoogleFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `third_party_file_service_input`<sup>Optional</sup> <a name="third_party_file_service_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```python
third_party_file_service_input: VmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineDatastoreNfsDatastore
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---


### VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">file_share_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">file_share</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_share_input`<sup>Optional</sup> <a name="file_share_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```python
file_share_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```python
servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_share`<sup>Required</sup> <a name="file_share" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```python
file_share: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```python
internal_value: VmwareengineDatastoreNfsDatastoreThirdPartyFileService
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### VmwareengineDatastoreTimeoutsOutputReference <a name="VmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import vmwareengine_datastore

vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VmwareengineDatastoreTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---



