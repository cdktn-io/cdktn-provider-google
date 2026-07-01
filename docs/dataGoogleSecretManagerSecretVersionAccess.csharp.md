# `dataGoogleSecretManagerSecretVersionAccess` Submodule <a name="`dataGoogleSecretManagerSecretVersionAccess` Submodule" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerSecretVersionAccess <a name="DataGoogleSecretManagerSecretVersionAccess" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access google_secret_manager_secret_version_access}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleSecretManagerSecretVersionAccess(Construct Scope, string Id, DataGoogleSecretManagerSecretVersionAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig">DataGoogleSecretManagerSecretVersionAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetIsSecretDataBase64">ResetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSecretDataBase64` <a name="ResetIsSecretDataBase64" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetIsSecretDataBase64"></a>

```csharp
private void ResetIsSecretDataBase64()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleSecretManagerSecretVersionAccess resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleSecretManagerSecretVersionAccess.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleSecretManagerSecretVersionAccess resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerSecretVersionAccess to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerSecretVersionAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerSecretVersionAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData">SecretData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64Input">IsSecretDataBase64Input</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretData"></a>

```csharp
public string SecretData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64Input`<sup>Optional</sup> <a name="IsSecretDataBase64Input" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64Input"></a>

```csharp
public bool|IResolvable IsSecretDataBase64Input { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64`<sup>Required</sup> <a name="IsSecretDataBase64" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.isSecretDataBase64"></a>

```csharp
public bool|IResolvable IsSecretDataBase64 { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerSecretVersionAccessConfig <a name="DataGoogleSecretManagerSecretVersionAccessConfig" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleSecretManagerSecretVersionAccessConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Secret,
    string Id = null,
    bool|IResolvable IsSecretDataBase64 = null,
    string Project = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerSecretVersionAccess#is_secret_data_base64}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#secret DataGoogleSecretManagerSecretVersionAccess#secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#id DataGoogleSecretManagerSecretVersionAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSecretDataBase64`<sup>Optional</sup> <a name="IsSecretDataBase64" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.isSecretDataBase64"></a>

```csharp
public bool|IResolvable IsSecretDataBase64 { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#is_secret_data_base64 DataGoogleSecretManagerSecretVersionAccess#is_secret_data_base64}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#project DataGoogleSecretManagerSecretVersionAccess#project}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleSecretManagerSecretVersionAccess.DataGoogleSecretManagerSecretVersionAccessConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/secret_manager_secret_version_access#version DataGoogleSecretManagerSecretVersionAccess#version}.

---



