# `dataGoogleServiceAccountJwt` Submodule <a name="`dataGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.dataGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountJwt <a name="DataGoogleServiceAccountJwt" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleServiceAccountJwt(Construct Scope, string Id, DataGoogleServiceAccountJwtConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig">DataGoogleServiceAccountJwtConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig">DataGoogleServiceAccountJwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates">ResetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn">ResetExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDelegates` <a name="ResetDelegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates"></a>

```csharp
private void ResetDelegates()
```

##### `ResetExpiresIn` <a name="ResetExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn"></a>

```csharp
private void ResetExpiresIn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleServiceAccountJwt resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceAccountJwt.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceAccountJwt.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceAccountJwt.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleServiceAccountJwt.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleServiceAccountJwt resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleServiceAccountJwt to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleServiceAccountJwt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountJwt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput">DelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput">ExpiresInInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput">PayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput">TargetServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates">Delegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn">ExpiresIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `DelegatesInput`<sup>Optional</sup> <a name="DelegatesInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput"></a>

```csharp
public string[] DelegatesInput { get; }
```

- *Type:* string[]

---

##### `ExpiresInInput`<sup>Optional</sup> <a name="ExpiresInInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput"></a>

```csharp
public double ExpiresInInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput"></a>

```csharp
public string PayloadInput { get; }
```

- *Type:* string

---

##### `TargetServiceAccountInput`<sup>Optional</sup> <a name="TargetServiceAccountInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```csharp
public string TargetServiceAccountInput { get; }
```

- *Type:* string

---

##### `Delegates`<sup>Required</sup> <a name="Delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates"></a>

```csharp
public string[] Delegates { get; }
```

- *Type:* string[]

---

##### `ExpiresIn`<sup>Required</sup> <a name="ExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn"></a>

```csharp
public double ExpiresIn { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountJwtConfig <a name="DataGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleServiceAccountJwtConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Payload,
    string TargetServiceAccount,
    string[] Delegates = null,
    double ExpiresIn = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload">Payload</a></code> | <code>string</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount">TargetServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates">Delegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn">ExpiresIn</a></code> | <code>double</code> | Number of seconds until the JWT expires. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload"></a>

```csharp
public string Payload { get; set; }
```

- *Type:* string

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#payload DataGoogleServiceAccountJwt#payload}

---

##### `TargetServiceAccount`<sup>Required</sup> <a name="TargetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```csharp
public string TargetServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}.

---

##### `Delegates`<sup>Optional</sup> <a name="Delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates"></a>

```csharp
public string[] Delegates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}.

---

##### `ExpiresIn`<sup>Optional</sup> <a name="ExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```csharp
public double ExpiresIn { get; set; }
```

- *Type:* double

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#expires_in DataGoogleServiceAccountJwt#expires_in}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



