# `ephemeralGoogleServiceAccountKey` Submodule <a name="`ephemeralGoogleServiceAccountKey` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountKey <a name="EphemeralGoogleServiceAccountKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountKey(Construct Scope, string Id, EphemeralGoogleServiceAccountKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig">EphemeralGoogleServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig">EphemeralGoogleServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey">ResetFetchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType">ResetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData">ResetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType">ResetPublicKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId">ResetServiceAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFetchKey` <a name="ResetFetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey"></a>

```csharp
private void ResetFetchKey()
```

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPrivateKeyType` <a name="ResetPrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType"></a>

```csharp
private void ResetPrivateKeyType()
```

##### `ResetPublicKeyData` <a name="ResetPublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData"></a>

```csharp
private void ResetPublicKeyData()
```

##### `ResetPublicKeyType` <a name="ResetPublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType"></a>

```csharp
private void ResetPublicKeyType()
```

##### `ResetServiceAccountId` <a name="ResetServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId"></a>

```csharp
private void ResetServiceAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

EphemeralGoogleServiceAccountKey.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput">FetchKeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput">PrivateKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput">PublicKeyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput">PublicKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput">ServiceAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey">FetchKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData">PublicKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType">PublicKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FetchKeyInput`<sup>Optional</sup> <a name="FetchKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput"></a>

```csharp
public bool|IResolvable FetchKeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyTypeInput`<sup>Optional</sup> <a name="PrivateKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput"></a>

```csharp
public string PrivateKeyTypeInput { get; }
```

- *Type:* string

---

##### `PublicKeyDataInput`<sup>Optional</sup> <a name="PublicKeyDataInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput"></a>

```csharp
public string PublicKeyDataInput { get; }
```

- *Type:* string

---

##### `PublicKeyTypeInput`<sup>Optional</sup> <a name="PublicKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```csharp
public string PublicKeyTypeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountIdInput`<sup>Optional</sup> <a name="ServiceAccountIdInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput"></a>

```csharp
public string ServiceAccountIdInput { get; }
```

- *Type:* string

---

##### `FetchKey`<sup>Required</sup> <a name="FetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey"></a>

```csharp
public bool|IResolvable FetchKey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; }
```

- *Type:* string

---

##### `PublicKeyData`<sup>Required</sup> <a name="PublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData"></a>

```csharp
public string PublicKeyData { get; }
```

- *Type:* string

---

##### `PublicKeyType`<sup>Required</sup> <a name="PublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType"></a>

```csharp
public string PublicKeyType { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountKeyConfig <a name="EphemeralGoogleServiceAccountKeyConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new EphemeralGoogleServiceAccountKeyConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    bool|IResolvable FetchKey = null,
    string KeyAlgorithm = null,
    string Name = null,
    string PrivateKey = null,
    string PrivateKeyType = null,
    string PublicKeyData = null,
    string PublicKeyType = null,
    string ServiceAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey">FetchKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name">Name</a></code> | <code>string</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData">PublicKeyData</a></code> | <code>string</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType">PublicKeyType</a></code> | <code>string</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | The ID of the parent service account of the key. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FetchKey`<sup>Optional</sup> <a name="FetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey"></a>

```csharp
public bool|IResolvable FetchKey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `PrivateKeyType`<sup>Optional</sup> <a name="PrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; set; }
```

- *Type:* string

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `PublicKeyData`<sup>Optional</sup> <a name="PublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData"></a>

```csharp
public string PublicKeyData { get; set; }
```

- *Type:* string

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `PublicKeyType`<sup>Optional</sup> <a name="PublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```csharp
public string PublicKeyType { get; set; }
```

- *Type:* string

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `ServiceAccountId`<sup>Optional</sup> <a name="ServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; set; }
```

- *Type:* string

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---



