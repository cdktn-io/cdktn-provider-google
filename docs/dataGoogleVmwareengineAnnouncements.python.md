# `dataGoogleVmwareengineAnnouncements` Submodule <a name="`dataGoogleVmwareengineAnnouncements` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineAnnouncements <a name="DataGoogleVmwareengineAnnouncements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements google_vmwareengine_announcements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.parent"></a>

- *Type:* str

Required.

The resource name of the location to be queried for announcements. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#parent DataGoogleVmwareengineAnnouncements#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#name DataGoogleVmwareengineAnnouncements#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineAnnouncements resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataGoogleVmwareengineAnnouncements resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataGoogleVmwareengineAnnouncements to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataGoogleVmwareengineAnnouncements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineAnnouncements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.announcements">announcements</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList">DataGoogleVmwareengineAnnouncementsAnnouncementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `announcements`<sup>Required</sup> <a name="announcements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.announcements"></a>

```python
announcements: DataGoogleVmwareengineAnnouncementsAnnouncementsList
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList">DataGoogleVmwareengineAnnouncementsAnnouncementsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncements.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineAnnouncementsAnnouncements <a name="DataGoogleVmwareengineAnnouncementsAnnouncements" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements.Initializer"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements()
```


### DataGoogleVmwareengineAnnouncementsConfig <a name="DataGoogleVmwareengineAnnouncementsConfig" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.Initializer"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.parent">parent</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.name">name</a></code> | <code>str</code> | The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Required.

The resource name of the location to be queried for announcements. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#parent DataGoogleVmwareengineAnnouncements#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#id DataGoogleVmwareengineAnnouncements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the specific Announcements to retrieve. If provided, the 'announcements' list will contain only this announcement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/vmwareengine_announcements#name DataGoogleVmwareengineAnnouncements#name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineAnnouncementsAnnouncementsList <a name="DataGoogleVmwareengineAnnouncementsAnnouncementsList" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference <a name="DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import data_google_vmwareengine_announcements

dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements">DataGoogleVmwareengineAnnouncementsAnnouncements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncementsOutputReference.property.internalValue"></a>

```python
internal_value: DataGoogleVmwareengineAnnouncementsAnnouncements
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineAnnouncements.DataGoogleVmwareengineAnnouncementsAnnouncements">DataGoogleVmwareengineAnnouncementsAnnouncements</a>

---



