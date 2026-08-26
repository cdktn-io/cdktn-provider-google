# `dataplexDataProduct` Submodule <a name="`dataplexDataProduct` Submodule" id="@cdktn/provider-google.dataplexDataProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDataProduct <a name="DataplexDataProduct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product google_dataplex_data_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProduct(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_product_id: str,
  display_name: str,
  location: str,
  owner_emails: typing.List[str],
  access_approval_config: DataplexDataProductAccessApprovalConfig = None,
  access_groups: IResolvable | typing.List[DataplexDataProductAccessGroups] = None,
  deletion_policy: str = None,
  description: str = None,
  icon: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexDataProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dataProductId">data_product_id</a></code> | <code>str</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.ownerEmails">owner_emails</a></code> | <code>typing.List[str]</code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessApprovalConfig">access_approval_config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessGroups">access_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]</code> | access_groups block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.icon">icon</a></code> | <code>str</code> | Base64 encoded image representing the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.dataProductId"></a>

- *Type:* str

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.displayName"></a>

- *Type:* str

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.location"></a>

- *Type:* str

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#location DataplexDataProduct#location}

---

##### `owner_emails`<sup>Required</sup> <a name="owner_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.ownerEmails"></a>

- *Type:* typing.List[str]

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}

---

##### `access_approval_config`<sup>Optional</sup> <a name="access_approval_config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessApprovalConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}

---

##### `access_groups`<sup>Optional</sup> <a name="access_groups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.accessGroups"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.description"></a>

- *Type:* str

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.icon"></a>

- *Type:* str

Base64 encoded image representing the data product.

Max Size: 3.0MiB
Expected image dimensions are 512x512 pixels, however the API only
performs validation on size of the encoded data.
Note: For byte fields, the content of the fields are base64-encoded (which
increases the size of the data by 33-36%) when using JSON on the wire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig">put_access_approval_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups">put_access_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig">reset_access_approval_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups">reset_access_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon">reset_icon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_approval_config` <a name="put_access_approval_config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig"></a>

```python
def put_access_approval_config(
  approver_emails: typing.List[str] = None
) -> None
```

###### `approver_emails`<sup>Optional</sup> <a name="approver_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessApprovalConfig.parameter.approverEmails"></a>

- *Type:* typing.List[str]

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#approver_emails DataplexDataProduct#approver_emails}

---

##### `put_access_groups` <a name="put_access_groups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups"></a>

```python
def put_access_groups(
  value: IResolvable | typing.List[DataplexDataProductAccessGroups]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putAccessGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}.

---

##### `reset_access_approval_config` <a name="reset_access_approval_config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessApprovalConfig"></a>

```python
def reset_access_approval_config() -> None
```

##### `reset_access_groups` <a name="reset_access_groups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetAccessGroups"></a>

```python
def reset_access_groups() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_icon` <a name="reset_icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetIcon"></a>

```python
def reset_icon() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProduct.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataplexDataProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexDataProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexDataProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataplexDataProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig">access_approval_config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups">access_groups</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount">asset_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput">access_approval_config_input</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput">access_groups_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput">data_product_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput">icon_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput">owner_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId">data_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon">icon</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails">owner_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_approval_config`<sup>Required</sup> <a name="access_approval_config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfig"></a>

```python
access_approval_config: DataplexDataProductAccessApprovalConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference">DataplexDataProductAccessApprovalConfigOutputReference</a>

---

##### `access_groups`<sup>Required</sup> <a name="access_groups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroups"></a>

```python
access_groups: DataplexDataProductAccessGroupsList
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList">DataplexDataProductAccessGroupsList</a>

---

##### `asset_count`<sup>Required</sup> <a name="asset_count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.assetCount"></a>

```python
asset_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeouts"></a>

```python
timeouts: DataplexDataProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference">DataplexDataProductTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `access_approval_config_input`<sup>Optional</sup> <a name="access_approval_config_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessApprovalConfigInput"></a>

```python
access_approval_config_input: DataplexDataProductAccessApprovalConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---

##### `access_groups_input`<sup>Optional</sup> <a name="access_groups_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.accessGroupsInput"></a>

```python
access_groups_input: IResolvable | typing.List[DataplexDataProductAccessGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]

---

##### `data_product_id_input`<sup>Optional</sup> <a name="data_product_id_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductIdInput"></a>

```python
data_product_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `icon_input`<sup>Optional</sup> <a name="icon_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.iconInput"></a>

```python
icon_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `owner_emails_input`<sup>Optional</sup> <a name="owner_emails_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmailsInput"></a>

```python
owner_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataplexDataProductTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.dataProductId"></a>

```python
data_product_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.icon"></a>

```python
icon: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `owner_emails`<sup>Required</sup> <a name="owner_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.ownerEmails"></a>

```python
owner_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDataProductAccessApprovalConfig <a name="DataplexDataProductAccessApprovalConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessApprovalConfig(
  approver_emails: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails">approver_emails</a></code> | <code>typing.List[str]</code> | Specifies the email addresses of users who are potential approvers. |

---

##### `approver_emails`<sup>Optional</sup> <a name="approver_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig.property.approverEmails"></a>

```python
approver_emails: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the email addresses of users who are potential approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#approver_emails DataplexDataProduct#approver_emails}

---

### DataplexDataProductAccessGroups <a name="DataplexDataProductAccessGroups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessGroups(
  display_name: str,
  group_id: str,
  id: str,
  principal: DataplexDataProductAccessGroupsPrincipal,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId">group_id</a></code> | <code>str</code> | Unique identifier of the access group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | principal block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description">description</a></code> | <code>str</code> | Description of the access group. |

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Unique identifier of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#group_id DataplexDataProduct#group_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.principal"></a>

```python
principal: DataplexDataProductAccessGroupsPrincipal
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#principal DataplexDataProduct#principal}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

### DataplexDataProductAccessGroupsPrincipal <a name="DataplexDataProductAccessGroupsPrincipal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal(
  google_group: str = None,
  service_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup">google_group</a></code> | <code>str</code> | Email of the Google Group. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount">service_account</a></code> | <code>str</code> | Specifies the email of the producer service account. |

---

##### `google_group`<sup>Optional</sup> <a name="google_group" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.googleGroup"></a>

```python
google_group: str
```

- *Type:* str

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#google_group DataplexDataProduct#google_group}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#service_account DataplexDataProduct#service_account}

---

### DataplexDataProductConfig <a name="DataplexDataProductConfig" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_product_id: str,
  display_name: str,
  location: str,
  owner_emails: typing.List[str],
  access_approval_config: DataplexDataProductAccessApprovalConfig = None,
  access_groups: IResolvable | typing.List[DataplexDataProductAccessGroups] = None,
  deletion_policy: str = None,
  description: str = None,
  icon: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: DataplexDataProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId">data_product_id</a></code> | <code>str</code> | The ID of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName">display_name</a></code> | <code>str</code> | User-friendly display name. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location">location</a></code> | <code>str</code> | The location for the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails">owner_emails</a></code> | <code>typing.List[str]</code> | Emails of the owners. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig">access_approval_config</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | access_approval_config block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups">access_groups</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]</code> | access_groups block. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description">description</a></code> | <code>str</code> | Description of the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon">icon</a></code> | <code>str</code> | Base64 encoded image representing the data product. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_product_id`<sup>Required</sup> <a name="data_product_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.dataProductId"></a>

```python
data_product_id: str
```

- *Type:* str

The ID of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#data_product_id DataplexDataProduct#data_product_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#display_name DataplexDataProduct#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#location DataplexDataProduct#location}

---

##### `owner_emails`<sup>Required</sup> <a name="owner_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.ownerEmails"></a>

```python
owner_emails: typing.List[str]
```

- *Type:* typing.List[str]

Emails of the owners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#owner_emails DataplexDataProduct#owner_emails}

---

##### `access_approval_config`<sup>Optional</sup> <a name="access_approval_config" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessApprovalConfig"></a>

```python
access_approval_config: DataplexDataProductAccessApprovalConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

access_approval_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#access_approval_config DataplexDataProduct#access_approval_config}

---

##### `access_groups`<sup>Optional</sup> <a name="access_groups" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.accessGroups"></a>

```python
access_groups: IResolvable | typing.List[DataplexDataProductAccessGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]

access_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#access_groups DataplexDataProduct#access_groups}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#deletion_policy DataplexDataProduct#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the data product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#description DataplexDataProduct#description}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.icon"></a>

```python
icon: str
```

- *Type:* str

Base64 encoded image representing the data product.

Max Size: 3.0MiB
Expected image dimensions are 512x512 pixels, however the API only
performs validation on size of the encoded data.
Note: For byte fields, the content of the fields are base64-encoded (which
increases the size of the data by 33-36%) when using JSON on the wire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#icon DataplexDataProduct#icon}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#id DataplexDataProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#labels DataplexDataProduct#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#project DataplexDataProduct#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductConfig.property.timeouts"></a>

```python
timeouts: DataplexDataProductTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#timeouts DataplexDataProduct#timeouts}

---

### DataplexDataProductTimeouts <a name="DataplexDataProductTimeouts" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#create DataplexDataProduct#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#delete DataplexDataProduct#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#update DataplexDataProduct#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDataProductAccessApprovalConfigOutputReference <a name="DataplexDataProductAccessApprovalConfigOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails">reset_approver_emails</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_approver_emails` <a name="reset_approver_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.resetApproverEmails"></a>

```python
def reset_approver_emails() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput">approver_emails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails">approver_emails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approver_emails_input`<sup>Optional</sup> <a name="approver_emails_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmailsInput"></a>

```python
approver_emails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approver_emails`<sup>Required</sup> <a name="approver_emails" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.approverEmails"></a>

```python
approver_emails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDataProductAccessApprovalConfig
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessApprovalConfig">DataplexDataProductAccessApprovalConfig</a>

---


### DataplexDataProductAccessGroupsList <a name="DataplexDataProductAccessGroupsList" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexDataProductAccessGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataplexDataProductAccessGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>]

---


### DataplexDataProductAccessGroupsOutputReference <a name="DataplexDataProductAccessGroupsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal">put_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_principal` <a name="put_principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal"></a>

```python
def put_principal(
  google_group: str = None,
  service_account: str = None
) -> None
```

###### `google_group`<sup>Optional</sup> <a name="google_group" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.googleGroup"></a>

- *Type:* str

Email of the Google Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#google_group DataplexDataProduct#google_group}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.putPrincipal.parameter.serviceAccount"></a>

- *Type:* str

Specifies the email of the producer service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/dataplex_data_product#service_account DataplexDataProduct#service_account}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput">principal_input</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principal"></a>

```python
principal: DataplexDataProductAccessGroupsPrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference">DataplexDataProductAccessGroupsPrincipalOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.principalInput"></a>

```python
principal_input: DataplexDataProductAccessGroupsPrincipal
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexDataProductAccessGroups
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroups">DataplexDataProductAccessGroups</a>

---


### DataplexDataProductAccessGroupsPrincipalOutputReference <a name="DataplexDataProductAccessGroupsPrincipalOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup">reset_google_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_google_group` <a name="reset_google_group" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetGoogleGroup"></a>

```python
def reset_google_group() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput">google_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup">google_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_group_input`<sup>Optional</sup> <a name="google_group_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroupInput"></a>

```python
google_group_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `google_group`<sup>Required</sup> <a name="google_group" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.googleGroup"></a>

```python
google_group: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataplexDataProductAccessGroupsPrincipal
```

- *Type:* <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductAccessGroupsPrincipal">DataplexDataProductAccessGroupsPrincipal</a>

---


### DataplexDataProductTimeoutsOutputReference <a name="DataplexDataProductTimeoutsOutputReference" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataplex_data_product

dataplexDataProduct.DataplexDataProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexDataProductTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.dataplexDataProduct.DataplexDataProductTimeouts">DataplexDataProductTimeouts</a>

---



