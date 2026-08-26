# `dataGoogleNetworkSecurityAddressGroups` Submodule <a name="`dataGoogleNetworkSecurityAddressGroups` Submodule" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkSecurityAddressGroups <a name="DataGoogleNetworkSecurityAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups google_network_security_address_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups(
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
  id: str = None,
  parent: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleNetworkSecurityAddressGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleNetworkSecurityAddressGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleNetworkSecurityAddressGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkSecurityAddressGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups">address_groups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `address_groups`<sup>Required</sup> <a name="address_groups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.addressGroups"></a>

```python
address_groups: DataGoogleNetworkSecurityAddressGroupsAddressGroupsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList">DataGoogleNetworkSecurityAddressGroupsAddressGroupsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroups <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroups" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups()
```


### DataGoogleNetworkSecurityAddressGroupsConfig <a name="DataGoogleNetworkSecurityAddressGroupsConfig" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  id: str = None,
  parent: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#location DataGoogleNetworkSecurityAddressGroups#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#id DataGoogleNetworkSecurityAddressGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the Address Group. Use "organizations/{organization_id}" for organization-level address groups or "projects/{project_id}" for project-level address groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#parent DataGoogleNetworkSecurityAddressGroups#parent}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/network_security_address_groups#project DataGoogleNetworkSecurityAddressGroups#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkSecurityAddressGroupsAddressGroupsList <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsList" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference <a name="DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_security_address_groups

dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkSecurityAddressGroupsAddressGroups
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkSecurityAddressGroups.DataGoogleNetworkSecurityAddressGroupsAddressGroups">DataGoogleNetworkSecurityAddressGroupsAddressGroups</a>

---



