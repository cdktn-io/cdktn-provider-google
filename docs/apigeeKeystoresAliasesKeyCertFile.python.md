# `apigeeKeystoresAliasesKeyCertFile` Submodule <a name="`apigeeKeystoresAliasesKeyCertFile` Submodule" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesKeyCertFile <a name="ApigeeKeystoresAliasesKeyCertFile" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  cert: str,
  environment: str,
  keystore: str,
  org_id: str,
  key: str = None,
  password: str = None,
  timeouts: ApigeeKeystoresAliasesKeyCertFileTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias Name. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.cert">cert</a></code> | <code>str</code> | Cert content. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Environment associated with the alias. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.keystore">keystore</a></code> | <code>str</code> | Keystore Name. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.key">key</a></code> | <code>str</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.password">password</a></code> | <code>str</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.alias"></a>

- *Type:* str

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#alias ApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.cert"></a>

- *Type:* str

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert ApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.environment"></a>

- *Type:* str

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#environment ApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.keystore"></a>

- *Type:* str

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#keystore ApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.orgId"></a>

- *Type:* str

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#org_id ApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.key"></a>

- *Type:* str

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#key ApigeeKeystoresAliasesKeyCertFile#key}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.password"></a>

- *Type:* str

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#password ApigeeKeystoresAliasesKeyCertFile#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#timeouts ApigeeKeystoresAliasesKeyCertFile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#create ApigeeKeystoresAliasesKeyCertFile#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#delete ApigeeKeystoresAliasesKeyCertFile#delete}

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.read"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#read ApigeeKeystoresAliasesKeyCertFile#read}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#update ApigeeKeystoresAliasesKeyCertFile#update}

---

##### `reset_key` <a name="reset_key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApigeeKeystoresAliasesKeyCertFile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApigeeKeystoresAliasesKeyCertFile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeKeystoresAliasesKeyCertFile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeKeystoresAliasesKeyCertFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesKeyCertFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfo">certs_info</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList">ApigeeKeystoresAliasesKeyCertFileCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystoreInput">keystore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystore">keystore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.password">password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certs_info`<sup>Required</sup> <a name="certs_info" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certsInfo"></a>

```python
certs_info: ApigeeKeystoresAliasesKeyCertFileCertsInfoList
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList">ApigeeKeystoresAliasesKeyCertFileCertsInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeouts"></a>

```python
timeouts: ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference">ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `keystore_input`<sup>Optional</sup> <a name="keystore_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystoreInput"></a>

```python
keystore_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ApigeeKeystoresAliasesKeyCertFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.password"></a>

```python
password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesKeyCertFileCertsInfo <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfo" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo()
```


### ApigeeKeystoresAliasesKeyCertFileConfig <a name="ApigeeKeystoresAliasesKeyCertFileConfig" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  alias: str,
  cert: str,
  environment: str,
  keystore: str,
  org_id: str,
  key: str = None,
  password: str = None,
  timeouts: ApigeeKeystoresAliasesKeyCertFileTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.alias">alias</a></code> | <code>str</code> | Alias Name. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.cert">cert</a></code> | <code>str</code> | Cert content. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.environment">environment</a></code> | <code>str</code> | Environment associated with the alias. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.keystore">keystore</a></code> | <code>str</code> | Keystore Name. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.orgId">org_id</a></code> | <code>str</code> | Organization ID associated with the alias. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.key">key</a></code> | <code>str</code> | Private Key content, omit if uploading to truststore. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.password">password</a></code> | <code>str</code> | Password for the Private Key if it's encrypted. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#alias ApigeeKeystoresAliasesKeyCertFile#alias}

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.cert"></a>

```python
cert: str
```

- *Type:* str

Cert content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert ApigeeKeystoresAliasesKeyCertFile#cert}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Environment associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#environment ApigeeKeystoresAliasesKeyCertFile#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

Keystore Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#keystore ApigeeKeystoresAliasesKeyCertFile#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Organization ID associated with the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#org_id ApigeeKeystoresAliasesKeyCertFile#org_id}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Private Key content, omit if uploading to truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#key ApigeeKeystoresAliasesKeyCertFile#key}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Password for the Private Key if it's encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#password ApigeeKeystoresAliasesKeyCertFile#password}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileConfig.property.timeouts"></a>

```python
timeouts: ApigeeKeystoresAliasesKeyCertFileTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#timeouts ApigeeKeystoresAliasesKeyCertFile#timeouts}

---

### ApigeeKeystoresAliasesKeyCertFileTimeouts <a name="ApigeeKeystoresAliasesKeyCertFileTimeouts" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.read">read</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#create ApigeeKeystoresAliasesKeyCertFile#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#delete ApigeeKeystoresAliasesKeyCertFile#delete}

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#read ApigeeKeystoresAliasesKeyCertFile#read}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/apigee_keystores_aliases_key_cert_file#update ApigeeKeystoresAliasesKeyCertFile#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesKeyCertFileCertsInfoList <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoList" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.basicConstraints">basic_constraints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.expiryDate">expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.isValid">is_valid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.sigAlgName">sig_alg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.validFrom">valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_constraints`<sup>Required</sup> <a name="basic_constraints" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.basicConstraints"></a>

```python
basic_constraints: str
```

- *Type:* str

---

##### `expiry_date`<sup>Required</sup> <a name="expiry_date" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.expiryDate"></a>

```python
expiry_date: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.isValid"></a>

```python
is_valid: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `sig_alg_name`<sup>Required</sup> <a name="sig_alg_name" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.sigAlgName"></a>

```python
sig_alg_name: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_from`<sup>Required</sup> <a name="valid_from" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesKeyCertFileCertsInfo
```

- *Type:* <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileCertsInfo">ApigeeKeystoresAliasesKeyCertFileCertsInfo</a>

---


### ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference <a name="ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import apigee_keystores_aliases_key_cert_file

apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApigeeKeystoresAliasesKeyCertFileTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.apigeeKeystoresAliasesKeyCertFile.ApigeeKeystoresAliasesKeyCertFileTimeouts">ApigeeKeystoresAliasesKeyCertFileTimeouts</a>

---



