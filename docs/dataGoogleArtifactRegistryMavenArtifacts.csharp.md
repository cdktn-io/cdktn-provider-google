# `dataGoogleArtifactRegistryMavenArtifacts` Submodule <a name="`dataGoogleArtifactRegistryMavenArtifacts` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryMavenArtifacts <a name="DataGoogleArtifactRegistryMavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts google_artifact_registry_maven_artifacts}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryMavenArtifacts(Construct Scope, string Id, DataGoogleArtifactRegistryMavenArtifactsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig">DataGoogleArtifactRegistryMavenArtifactsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig">DataGoogleArtifactRegistryMavenArtifactsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifacts resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryMavenArtifacts.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryMavenArtifacts.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryMavenArtifacts.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryMavenArtifacts.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryMavenArtifacts resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryMavenArtifacts to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryMavenArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryMavenArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.mavenArtifacts">MavenArtifacts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList">DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `MavenArtifacts`<sup>Required</sup> <a name="MavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.mavenArtifacts"></a>

```csharp
public DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList MavenArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList">DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifacts.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryMavenArtifactsConfig <a name="DataGoogleArtifactRegistryMavenArtifactsConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryMavenArtifactsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string RepositoryId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#location DataGoogleArtifactRegistryMavenArtifacts#location}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#repository_id DataGoogleArtifactRegistryMavenArtifacts#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#id DataGoogleArtifactRegistryMavenArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/artifact_registry_maven_artifacts#project DataGoogleArtifactRegistryMavenArtifacts#project}.

---

### DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get"></a>

```csharp
private DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference <a name="DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.artifactId">ArtifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.pomUri">PomUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts">DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArtifactId`<sup>Required</sup> <a name="ArtifactId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.artifactId"></a>

```csharp
public string ArtifactId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PomUri`<sup>Required</sup> <a name="PomUri" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.pomUri"></a>

```csharp
public string PomUri { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryMavenArtifacts.DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts">DataGoogleArtifactRegistryMavenArtifactsMavenArtifacts</a>

---



