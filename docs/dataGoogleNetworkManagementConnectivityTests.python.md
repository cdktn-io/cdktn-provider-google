# `dataGoogleNetworkManagementConnectivityTests` Submodule <a name="`dataGoogleNetworkManagementConnectivityTests` Submodule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests google_network_management_connectivity_tests}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.filter">filter</a></code> | <code>str</code> | Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.filter"></a>

- *Type:* str

Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#filter DataGoogleNetworkManagementConnectivityTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleNetworkManagementConnectivityTests resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleNetworkManagementConnectivityTests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests">connectivity_tests</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `connectivity_tests`<sup>Required</sup> <a name="connectivity_tests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.connectivityTests"></a>

```python
connectivity_tests: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestsConfig <a name="DataGoogleNetworkManagementConnectivityTestsConfig" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  filter: str = None,
  id: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter">filter</a></code> | <code>str</code> | Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.filter"></a>

```python
filter: str
```

- *Type:* str

Lists the ConnectivityTests that match the filter expression. A filter expression filters the resources listed in the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#filter DataGoogleNetworkManagementConnectivityTests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#id DataGoogleNetworkManagementConnectivityTests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.36.0/docs/data-sources/network_management_connectivity_tests#project DataGoogleNetworkManagementConnectivityTests#project}.

---

### DataGoogleNetworkManagementConnectivityTestsConnectivityTests <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTests" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests()
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination()
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource()
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion()
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction()
```


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision()
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule">forwarding_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster">gke_master_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkePod">gke_pod</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster">redis_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance">redis_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: str
```

- *Type:* str

---

##### `forwarding_rule`<sup>Required</sup> <a name="forwarding_rule" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.forwardingRule"></a>

```python
forwarding_rule: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `gke_master_cluster`<sup>Required</sup> <a name="gke_master_cluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkeMasterCluster"></a>

```python
gke_master_cluster: str
```

- *Type:* str

---

##### `gke_pod`<sup>Required</sup> <a name="gke_pod" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.gkePod"></a>

```python
gke_pod: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `redis_cluster`<sup>Required</sup> <a name="redis_cluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisCluster"></a>

```python
redis_cluster: str
```

- *Type:* str

---

##### `redis_instance`<sup>Required</sup> <a name="redis_instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.redisInstance"></a>

```python
redis_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestination</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks">bypass_firewall_checks</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects">related_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip">round_trip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass_firewall_checks`<sup>Required</sup> <a name="bypass_firewall_checks" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.bypassFirewallChecks"></a>

```python
bypass_firewall_checks: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.destination"></a>

```python
destination: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsDestinationList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.labels"></a>

```python
labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `related_projects`<sup>Required</sup> <a name="related_projects" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.relatedProjects"></a>

```python
related_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `round_trip`<sup>Required</sup> <a name="round_trip" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.roundTrip"></a>

```python
round_trip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.source"></a>

```python
source: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkManagementConnectivityTestsConnectivityTests
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTests">DataGoogleNetworkManagementConnectivityTestsConnectivityTests</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersion</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunction</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevision</a>

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference <a name="DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_network_management_connectivity_tests

dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion">app_engine_version</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction">cloud_function</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision">cloud_run_revision</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance">cloud_sql_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster">gke_master_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_engine_version`<sup>Required</sup> <a name="app_engine_version" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.appEngineVersion"></a>

```python
app_engine_version: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceAppEngineVersionList</a>

---

##### `cloud_function`<sup>Required</sup> <a name="cloud_function" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudFunction"></a>

```python
cloud_function: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudFunctionList</a>

---

##### `cloud_run_revision`<sup>Required</sup> <a name="cloud_run_revision" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudRunRevision"></a>

```python
cloud_run_revision: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceCloudRunRevisionList</a>

---

##### `cloud_sql_instance`<sup>Required</sup> <a name="cloud_sql_instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.cloudSqlInstance"></a>

```python
cloud_sql_instance: str
```

- *Type:* str

---

##### `gke_master_cluster`<sup>Required</sup> <a name="gke_master_cluster" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.gkeMasterCluster"></a>

```python
gke_master_cluster: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleNetworkManagementConnectivityTests.DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource">DataGoogleNetworkManagementConnectivityTestsConnectivityTestsSource</a>

---



