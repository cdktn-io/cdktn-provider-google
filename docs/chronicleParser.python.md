# `chronicleParser` Submodule <a name="`chronicleParser` Submodule" id="@cdktn/provider-google.chronicleParser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParser <a name="ChronicleParser" id="@cdktn/provider-google.chronicleParser.ChronicleParser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser google_chronicle_parser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParser(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  logtype: str,
  cbn: str = None,
  deletion_policy: str = None,
  id: str = None,
  low_code: ChronicleParserLowCode = None,
  project: str = None,
  timeouts: ChronicleParserTimeouts = None,
  validated_on_empty_logs: bool | IResolvable = None,
  validation_skipped: bool | IResolvable = None,
  version_info: ChronicleParserVersionInfo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.logtype">logtype</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.cbn">cbn</a></code> | <code>str</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#id ChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.lowCode">low_code</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#project ChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.validatedOnEmptyLogs">validated_on_empty_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.versionInfo">version_info</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#instance ChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#location ChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.logtype"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#logtype ChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.cbn"></a>

- *Type:* str

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#cbn ChronicleParser#cbn}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#deletion_policy ChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#id ChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `low_code`<sup>Optional</sup> <a name="low_code" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.lowCode"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#low_code ChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#project ChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#timeouts ChronicleParser#timeouts}

---

##### `validated_on_empty_logs`<sup>Optional</sup> <a name="validated_on_empty_logs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.validatedOnEmptyLogs"></a>

- *Type:* bool | cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#validated_on_empty_logs ChronicleParser#validated_on_empty_logs}

---

##### `validation_skipped`<sup>Optional</sup> <a name="validation_skipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.validationSkipped"></a>

- *Type:* bool | cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#validation_skipped ChronicleParser#validation_skipped}

---

##### `version_info`<sup>Optional</sup> <a name="version_info" id="@cdktn/provider-google.chronicleParser.ChronicleParser.Initializer.parameter.versionInfo"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#version_info ChronicleParser#version_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode">put_low_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo">put_version_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetCbn">reset_cbn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetLowCode">reset_low_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidatedOnEmptyLogs">reset_validated_on_empty_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidationSkipped">reset_validation_skipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.resetVersionInfo">reset_version_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleParser.ChronicleParser.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleParser.ChronicleParser.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleParser.ChronicleParser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleParser.ChronicleParser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleParser.ChronicleParser.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_low_code` <a name="put_low_code" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode"></a>

```python
def put_low_code(
  field_extractors: ChronicleParserLowCodeFieldExtractors = None,
  log: str = None
) -> None
```

###### `field_extractors`<sup>Optional</sup> <a name="field_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode.parameter.fieldExtractors"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#field_extractors ChronicleParser#field_extractors}

---

###### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putLowCode.parameter.log"></a>

- *Type:* str

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#log ChronicleParser#log}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#create ChronicleParser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#update ChronicleParser#update}.

---

##### `put_version_info` <a name="put_version_info" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo"></a>

```python
def put_version_info(
  auto_upgrade_disabled: bool | IResolvable
) -> None
```

###### `auto_upgrade_disabled`<sup>Required</sup> <a name="auto_upgrade_disabled" id="@cdktn/provider-google.chronicleParser.ChronicleParser.putVersionInfo.parameter.autoUpgradeDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#auto_upgrade_disabled ChronicleParser#auto_upgrade_disabled}

---

##### `reset_cbn` <a name="reset_cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetCbn"></a>

```python
def reset_cbn() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_low_code` <a name="reset_low_code" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetLowCode"></a>

```python
def reset_low_code() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validated_on_empty_logs` <a name="reset_validated_on_empty_logs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidatedOnEmptyLogs"></a>

```python
def reset_validated_on_empty_logs() -> None
```

##### `reset_validation_skipped` <a name="reset_validation_skipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetValidationSkipped"></a>

```python
def reset_validation_skipped() -> None
```

##### `reset_version_info` <a name="reset_version_info" id="@cdktn/provider-google.chronicleParser.ChronicleParser.resetVersionInfo"></a>

```python
def reset_version_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParser.ChronicleParser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleParser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleParser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleParser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.changelogs">changelogs</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList">ChronicleParserChangelogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.creator">creator</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList">ChronicleParserCreatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.dynamicParsingConfig">dynamic_parsing_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCode">low_code</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference">ChronicleParserLowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.parser">parser</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.parserExtension">parser_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.releaseStage">release_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference">ChronicleParserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationReport">validation_report</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationStage">validation_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfo">version_info</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference">ChronicleParserVersionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbnInput">cbn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtypeInput">logtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCodeInput">low_code_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogsInput">validated_on_empty_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkippedInput">validation_skipped_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfoInput">version_info_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbn">cbn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtype">logtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogs">validated_on_empty_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `changelogs`<sup>Required</sup> <a name="changelogs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.changelogs"></a>

```python
changelogs: ChronicleParserChangelogsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList">ChronicleParserChangelogsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.creator"></a>

```python
creator: ChronicleParserCreatorList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList">ChronicleParserCreatorList</a>

---

##### `dynamic_parsing_config`<sup>Required</sup> <a name="dynamic_parsing_config" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.dynamicParsingConfig"></a>

```python
dynamic_parsing_config: str
```

- *Type:* str

---

##### `low_code`<sup>Required</sup> <a name="low_code" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCode"></a>

```python
low_code: ChronicleParserLowCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference">ChronicleParserLowCodeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.parser"></a>

```python
parser: str
```

- *Type:* str

---

##### `parser_extension`<sup>Required</sup> <a name="parser_extension" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.parserExtension"></a>

```python
parser_extension: str
```

- *Type:* str

---

##### `release_stage`<sup>Required</sup> <a name="release_stage" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.releaseStage"></a>

```python
release_stage: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeouts"></a>

```python
timeouts: ChronicleParserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference">ChronicleParserTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `validation_report`<sup>Required</sup> <a name="validation_report" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationReport"></a>

```python
validation_report: str
```

- *Type:* str

---

##### `validation_stage`<sup>Required</sup> <a name="validation_stage" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationStage"></a>

```python
validation_stage: str
```

- *Type:* str

---

##### `version_info`<sup>Required</sup> <a name="version_info" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfo"></a>

```python
version_info: ChronicleParserVersionInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference">ChronicleParserVersionInfoOutputReference</a>

---

##### `cbn_input`<sup>Optional</sup> <a name="cbn_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbnInput"></a>

```python
cbn_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logtype_input`<sup>Optional</sup> <a name="logtype_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtypeInput"></a>

```python
logtype_input: str
```

- *Type:* str

---

##### `low_code_input`<sup>Optional</sup> <a name="low_code_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.lowCodeInput"></a>

```python
low_code_input: ChronicleParserLowCode
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleParserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---

##### `validated_on_empty_logs_input`<sup>Optional</sup> <a name="validated_on_empty_logs_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogsInput"></a>

```python
validated_on_empty_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validation_skipped_input`<sup>Optional</sup> <a name="validation_skipped_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkippedInput"></a>

```python
validation_skipped_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `version_info_input`<sup>Optional</sup> <a name="version_info_input" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.versionInfoInput"></a>

```python
version_info_input: ChronicleParserVersionInfo
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---

##### `cbn`<sup>Required</sup> <a name="cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.cbn"></a>

```python
cbn: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.logtype"></a>

```python
logtype: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `validated_on_empty_logs`<sup>Required</sup> <a name="validated_on_empty_logs" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validatedOnEmptyLogs"></a>

```python
validated_on_empty_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validation_skipped`<sup>Required</sup> <a name="validation_skipped" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.validationSkipped"></a>

```python
validation_skipped: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleParser.ChronicleParser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserChangelogs <a name="ChronicleParserChangelogs" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserChangelogs()
```


### ChronicleParserChangelogsEntries <a name="ChronicleParserChangelogsEntries" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserChangelogsEntries()
```


### ChronicleParserConfig <a name="ChronicleParserConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance: str,
  location: str,
  logtype: str,
  cbn: str = None,
  deletion_policy: str = None,
  id: str = None,
  low_code: ChronicleParserLowCode = None,
  project: str = None,
  timeouts: ChronicleParserTimeouts = None,
  validated_on_empty_logs: bool | IResolvable = None,
  validation_skipped: bool | IResolvable = None,
  version_info: ChronicleParserVersionInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.logtype">logtype</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.cbn">cbn</a></code> | <code>str</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#id ChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lowCode">low_code</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#project ChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validatedOnEmptyLogs">validated_on_empty_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validationSkipped">validation_skipped</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.versionInfo">version_info</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#instance ChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#location ChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.logtype"></a>

```python
logtype: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#logtype ChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.cbn"></a>

```python
cbn: str
```

- *Type:* str

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#cbn ChronicleParser#cbn}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#deletion_policy ChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#id ChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `low_code`<sup>Optional</sup> <a name="low_code" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.lowCode"></a>

```python
low_code: ChronicleParserLowCode
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#low_code ChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#project ChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.timeouts"></a>

```python
timeouts: ChronicleParserTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#timeouts ChronicleParser#timeouts}

---

##### `validated_on_empty_logs`<sup>Optional</sup> <a name="validated_on_empty_logs" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validatedOnEmptyLogs"></a>

```python
validated_on_empty_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#validated_on_empty_logs ChronicleParser#validated_on_empty_logs}

---

##### `validation_skipped`<sup>Optional</sup> <a name="validation_skipped" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.validationSkipped"></a>

```python
validation_skipped: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#validation_skipped ChronicleParser#validation_skipped}

---

##### `version_info`<sup>Optional</sup> <a name="version_info" id="@cdktn/provider-google.chronicleParser.ChronicleParserConfig.property.versionInfo"></a>

```python
version_info: ChronicleParserVersionInfo
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#version_info ChronicleParser#version_info}

---

### ChronicleParserCreator <a name="ChronicleParserCreator" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreator.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserCreator()
```


### ChronicleParserLowCode <a name="ChronicleParserLowCode" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCode(
  field_extractors: ChronicleParserLowCodeFieldExtractors = None,
  log: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.log">log</a></code> | <code>str</code> | The log used to create this low code parser in the UI. |

---

##### `field_extractors`<sup>Optional</sup> <a name="field_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.fieldExtractors"></a>

```python
field_extractors: ChronicleParserLowCodeFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#field_extractors ChronicleParser#field_extractors}

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCode.property.log"></a>

```python
log: str
```

- *Type:* str

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#log ChronicleParser#log}

---

### ChronicleParserLowCodeFieldExtractors <a name="ChronicleParserLowCodeFieldExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractors(
  append_repeated_fields: bool | IResolvable = None,
  extractors: IResolvable | typing.List[ChronicleParserLowCodeFieldExtractorsExtractors] = None,
  log_format: str = None,
  preprocess_config: ChronicleParserLowCodeFieldExtractorsPreprocessConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields">append_repeated_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.extractors">extractors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]</code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.logFormat">log_format</a></code> | <code>str</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.preprocessConfig">preprocess_config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `append_repeated_fields`<sup>Optional</sup> <a name="append_repeated_fields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields"></a>

```python
append_repeated_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#append_repeated_fields ChronicleParser#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.extractors"></a>

```python
extractors: IResolvable | typing.List[ChronicleParserLowCodeFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#extractors ChronicleParser#extractors}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#log_format ChronicleParser#log_format}

---

##### `preprocess_config`<sup>Optional</sup> <a name="preprocess_config" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors.property.preprocessConfig"></a>

```python
preprocess_config: ChronicleParserLowCodeFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#preprocess_config ChronicleParser#preprocess_config}

---

### ChronicleParserLowCodeFieldExtractorsExtractors <a name="ChronicleParserLowCodeFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors(
  destination_path: str = None,
  field_path: str = None,
  precondition_op: str = None,
  precondition_path: str = None,
  precondition_value: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath">destination_path</a></code> | <code>str</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath">field_path</a></code> | <code>str</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp">precondition_op</a></code> | <code>str</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath">precondition_path</a></code> | <code>str</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue">precondition_value</a></code> | <code>str</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.value">value</a></code> | <code>str</code> | Value to be mapped to the destination path directly. |

---

##### `destination_path`<sup>Optional</sup> <a name="destination_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#destination_path ChronicleParser#destination_path}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#field_path ChronicleParser#field_path}

---

##### `precondition_op`<sup>Optional</sup> <a name="precondition_op" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp"></a>

```python
precondition_op: str
```

- *Type:* str

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#precondition_op ChronicleParser#precondition_op}

---

##### `precondition_path`<sup>Optional</sup> <a name="precondition_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath"></a>

```python
precondition_path: str
```

- *Type:* str

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#precondition_path ChronicleParser#precondition_path}

---

##### `precondition_value`<sup>Optional</sup> <a name="precondition_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue"></a>

```python
precondition_value: str
```

- *Type:* str

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#precondition_value ChronicleParser#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors.property.value"></a>

```python
value: str
```

- *Type:* str

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#value ChronicleParser#value}

---

### ChronicleParserLowCodeFieldExtractorsPreprocessConfig <a name="ChronicleParserLowCodeFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig(
  grok_regex: str = None,
  target: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex">grok_regex</a></code> | <code>str</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>str</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grok_regex`<sup>Optional</sup> <a name="grok_regex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```python
grok_regex: str
```

- *Type:* str

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#grok_regex ChronicleParser#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#target ChronicleParser#target}

---

### ChronicleParserTimeouts <a name="ChronicleParserTimeouts" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#create ChronicleParser#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#update ChronicleParser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#create ChronicleParser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#delete ChronicleParser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#update ChronicleParser#update}.

---

### ChronicleParserVersionInfo <a name="ChronicleParserVersionInfo" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserVersionInfo(
  auto_upgrade_disabled: bool | IResolvable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.property.autoUpgradeDisabled">auto_upgrade_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Signifies if the parser is disabled for auto upgrade. |

---

##### `auto_upgrade_disabled`<sup>Required</sup> <a name="auto_upgrade_disabled" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo.property.autoUpgradeDisabled"></a>

```python
auto_upgrade_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#auto_upgrade_disabled ChronicleParser#auto_upgrade_disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserChangelogsEntriesList <a name="ChronicleParserChangelogsEntriesList" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserChangelogsEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleParserChangelogsEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChronicleParserChangelogsEntriesOutputReference <a name="ChronicleParserChangelogsEntriesOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserChangelogsEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.changeMessage">change_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.deleted">deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.parserVersion">parser_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries">ChronicleParserChangelogsEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_message`<sup>Required</sup> <a name="change_message" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.changeMessage"></a>

```python
change_message: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.deleted"></a>

```python
deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `parser_version`<sup>Required</sup> <a name="parser_version" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.parserVersion"></a>

```python
parser_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserChangelogsEntries
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntries">ChronicleParserChangelogsEntries</a>

---


### ChronicleParserChangelogsList <a name="ChronicleParserChangelogsList" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserChangelogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleParserChangelogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChronicleParserChangelogsOutputReference <a name="ChronicleParserChangelogsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserChangelogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList">ChronicleParserChangelogsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs">ChronicleParserChangelogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.entries"></a>

```python
entries: ChronicleParserChangelogsEntriesList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsEntriesList">ChronicleParserChangelogsEntriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserChangelogsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserChangelogs
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserChangelogs">ChronicleParserChangelogs</a>

---


### ChronicleParserCreatorList <a name="ChronicleParserCreatorList" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserCreatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleParserCreatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ChronicleParserCreatorOutputReference <a name="ChronicleParserCreatorOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserCreatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.customer">customer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreator">ChronicleParserCreator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.customer"></a>

```python
customer: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserCreatorOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserCreator
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserCreator">ChronicleParserCreator</a>

---


### ChronicleParserLowCodeFieldExtractorsExtractorsList <a name="ChronicleParserLowCodeFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChronicleParserLowCodeFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]

---


### ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference <a name="ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath">reset_destination_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp">reset_precondition_op</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath">reset_precondition_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue">reset_precondition_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_path` <a name="reset_destination_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```python
def reset_destination_path() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_precondition_op` <a name="reset_precondition_op" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```python
def reset_precondition_op() -> None
```

##### `reset_precondition_path` <a name="reset_precondition_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```python
def reset_precondition_path() -> None
```

##### `reset_precondition_value` <a name="reset_precondition_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```python
def reset_precondition_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destination_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">precondition_op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">precondition_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">precondition_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp">precondition_op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath">precondition_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue">precondition_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_path_input`<sup>Optional</sup> <a name="destination_path_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```python
destination_path_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `precondition_op_input`<sup>Optional</sup> <a name="precondition_op_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```python
precondition_op_input: str
```

- *Type:* str

---

##### `precondition_path_input`<sup>Optional</sup> <a name="precondition_path_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```python
precondition_path_input: str
```

- *Type:* str

---

##### `precondition_value_input`<sup>Optional</sup> <a name="precondition_value_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```python
precondition_value_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `precondition_op`<sup>Required</sup> <a name="precondition_op" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```python
precondition_op: str
```

- *Type:* str

---

##### `precondition_path`<sup>Required</sup> <a name="precondition_path" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```python
precondition_path: str
```

- *Type:* str

---

##### `precondition_value`<sup>Required</sup> <a name="precondition_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```python
precondition_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleParserLowCodeFieldExtractorsExtractors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>

---


### ChronicleParserLowCodeFieldExtractorsOutputReference <a name="ChronicleParserLowCodeFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors">put_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig">put_preprocess_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields">reset_append_repeated_fields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors">reset_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig">reset_preprocess_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extractors` <a name="put_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors"></a>

```python
def put_extractors(
  value: IResolvable | typing.List[ChronicleParserLowCodeFieldExtractorsExtractors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]

---

##### `put_preprocess_config` <a name="put_preprocess_config" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig"></a>

```python
def put_preprocess_config(
  grok_regex: str = None,
  target: str = None
) -> None
```

###### `grok_regex`<sup>Optional</sup> <a name="grok_regex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.grokRegex"></a>

- *Type:* str

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#grok_regex ChronicleParser#grok_regex}

---

###### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.target"></a>

- *Type:* str

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#target ChronicleParser#target}

---

##### `reset_append_repeated_fields` <a name="reset_append_repeated_fields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```python
def reset_append_repeated_fields() -> None
```

##### `reset_extractors` <a name="reset_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors"></a>

```python
def reset_extractors() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_preprocess_config` <a name="reset_preprocess_config" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```python
def reset_preprocess_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList">ChronicleParserLowCodeFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig">preprocess_config</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet">transformed_cbn_snippet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">append_repeated_fields_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput">extractors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput">preprocess_config_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields">append_repeated_fields</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors"></a>

```python
extractors: ChronicleParserLowCodeFieldExtractorsExtractorsList
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractorsList">ChronicleParserLowCodeFieldExtractorsExtractorsList</a>

---

##### `preprocess_config`<sup>Required</sup> <a name="preprocess_config" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig"></a>

```python
preprocess_config: ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformed_cbn_snippet`<sup>Required</sup> <a name="transformed_cbn_snippet" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```python
transformed_cbn_snippet: str
```

- *Type:* str

---

##### `append_repeated_fields_input`<sup>Optional</sup> <a name="append_repeated_fields_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```python
append_repeated_fields_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `extractors_input`<sup>Optional</sup> <a name="extractors_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput"></a>

```python
extractors_input: IResolvable | typing.List[ChronicleParserLowCodeFieldExtractorsExtractors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `preprocess_config_input`<sup>Optional</sup> <a name="preprocess_config_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```python
preprocess_config_input: ChronicleParserLowCodeFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `append_repeated_fields`<sup>Required</sup> <a name="append_repeated_fields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```python
append_repeated_fields: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserLowCodeFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---


### ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">reset_grok_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_grok_regex` <a name="reset_grok_regex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```python
def reset_grok_regex() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grok_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grok_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grok_regex_input`<sup>Optional</sup> <a name="grok_regex_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```python
grok_regex_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `grok_regex`<sup>Required</sup> <a name="grok_regex" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```python
grok_regex: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserLowCodeFieldExtractorsPreprocessConfig
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserLowCodeOutputReference <a name="ChronicleParserLowCodeOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserLowCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors">put_field_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetFieldExtractors">reset_field_extractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetLog">reset_log</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_extractors` <a name="put_field_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors"></a>

```python
def put_field_extractors(
  append_repeated_fields: bool | IResolvable = None,
  extractors: IResolvable | typing.List[ChronicleParserLowCodeFieldExtractorsExtractors] = None,
  log_format: str = None,
  preprocess_config: ChronicleParserLowCodeFieldExtractorsPreprocessConfig = None
) -> None
```

###### `append_repeated_fields`<sup>Optional</sup> <a name="append_repeated_fields" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.appendRepeatedFields"></a>

- *Type:* bool | cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#append_repeated_fields ChronicleParser#append_repeated_fields}

---

###### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.extractors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsExtractors">ChronicleParserLowCodeFieldExtractorsExtractors</a>]

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#extractors ChronicleParser#extractors}

---

###### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.logFormat"></a>

- *Type:* str

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#log_format ChronicleParser#log_format}

---

###### `preprocess_config`<sup>Optional</sup> <a name="preprocess_config" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.preprocessConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsPreprocessConfig">ChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/chronicle_parser#preprocess_config ChronicleParser#preprocess_config}

---

##### `reset_field_extractors` <a name="reset_field_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetFieldExtractors"></a>

```python
def reset_field_extractors() -> None
```

##### `reset_log` <a name="reset_log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.resetLog"></a>

```python
def reset_log() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractors">field_extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference">ChronicleParserLowCodeFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractorsInput">field_extractors_input</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.logInput">log_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.log">log</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_extractors`<sup>Required</sup> <a name="field_extractors" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractors"></a>

```python
field_extractors: ChronicleParserLowCodeFieldExtractorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractorsOutputReference">ChronicleParserLowCodeFieldExtractorsOutputReference</a>

---

##### `field_extractors_input`<sup>Optional</sup> <a name="field_extractors_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.fieldExtractorsInput"></a>

```python
field_extractors_input: ChronicleParserLowCodeFieldExtractors
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeFieldExtractors">ChronicleParserLowCodeFieldExtractors</a>

---

##### `log_input`<sup>Optional</sup> <a name="log_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.logInput"></a>

```python
log_input: str
```

- *Type:* str

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.log"></a>

```python
log: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserLowCodeOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserLowCode
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserLowCode">ChronicleParserLowCode</a>

---


### ChronicleParserTimeoutsOutputReference <a name="ChronicleParserTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleParserTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserTimeouts">ChronicleParserTimeouts</a>

---


### ChronicleParserVersionInfoOutputReference <a name="ChronicleParserVersionInfoOutputReference" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_parser

chronicleParser.ChronicleParserVersionInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParser">latest_parser</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParserVersion">latest_parser_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.rollbackAvailable">rollback_available</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput">auto_upgrade_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled">auto_upgrade_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_parser`<sup>Required</sup> <a name="latest_parser" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParser"></a>

```python
latest_parser: str
```

- *Type:* str

---

##### `latest_parser_version`<sup>Required</sup> <a name="latest_parser_version" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.latestParserVersion"></a>

```python
latest_parser_version: str
```

- *Type:* str

---

##### `rollback_available`<sup>Required</sup> <a name="rollback_available" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.rollbackAvailable"></a>

```python
rollback_available: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `auto_upgrade_disabled_input`<sup>Optional</sup> <a name="auto_upgrade_disabled_input" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput"></a>

```python
auto_upgrade_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_upgrade_disabled`<sup>Required</sup> <a name="auto_upgrade_disabled" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled"></a>

```python
auto_upgrade_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfoOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleParserVersionInfo
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParser.ChronicleParserVersionInfo">ChronicleParserVersionInfo</a>

---



