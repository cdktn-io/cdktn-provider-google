# `dataGoogleArtifactRegistryFile` Submodule <a name="`dataGoogleArtifactRegistryFile` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryFile <a name="DataGoogleArtifactRegistryFile" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file google_artifact_registry_file}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryFile(Construct Scope, string Id, DataGoogleArtifactRegistryFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig">DataGoogleArtifactRegistryFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig">DataGoogleArtifactRegistryFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverwrite">ResetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts"></a>

```csharp
private void PutTimeouts(DataGoogleArtifactRegistryFileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOverwrite` <a name="ResetOverwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetOverwrite"></a>

```csharp
private void ResetOverwrite()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryFile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryFile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryFile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryFile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.hashes">Hashes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputBase64Sha256">OutputBase64Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputSha256">OutputSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.sizeBytes">SizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference">DataGoogleArtifactRegistryFileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileIdInput">FileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPathInput">OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwriteInput">OverwriteInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileId">FileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPath">OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwrite">Overwrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Hashes`<sup>Required</sup> <a name="Hashes" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.hashes"></a>

```csharp
public StringMap Hashes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputBase64Sha256`<sup>Required</sup> <a name="OutputBase64Sha256" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputBase64Sha256"></a>

```csharp
public string OutputBase64Sha256 { get; }
```

- *Type:* string

---

##### `OutputSha256`<sup>Required</sup> <a name="OutputSha256" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputSha256"></a>

```csharp
public string OutputSha256 { get; }
```

- *Type:* string

---

##### `SizeBytes`<sup>Required</sup> <a name="SizeBytes" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.sizeBytes"></a>

```csharp
public double SizeBytes { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeouts"></a>

```csharp
public DataGoogleArtifactRegistryFileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference">DataGoogleArtifactRegistryFileTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `FileIdInput`<sup>Optional</sup> <a name="FileIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileIdInput"></a>

```csharp
public string FileIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OutputPathInput`<sup>Optional</sup> <a name="OutputPathInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPathInput"></a>

```csharp
public string OutputPathInput { get; }
```

- *Type:* string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwriteInput"></a>

```csharp
public bool|IResolvable OverwriteInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.timeoutsInput"></a>

```csharp
public IResolvable|DataGoogleArtifactRegistryFileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---

##### `FileId`<sup>Required</sup> <a name="FileId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.fileId"></a>

```csharp
public string FileId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OutputPath`<sup>Required</sup> <a name="OutputPath" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.outputPath"></a>

```csharp
public string OutputPath { get; }
```

- *Type:* string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.overwrite"></a>

```csharp
public bool|IResolvable Overwrite { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryFileConfig <a name="DataGoogleArtifactRegistryFileConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryFileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FileId,
    string Location,
    string OutputPath,
    string RepositoryId,
    string Id = null,
    bool|IResolvable Overwrite = null,
    string Project = null,
    DataGoogleArtifactRegistryFileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.fileId">FileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.outputPath">OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.overwrite">Overwrite</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FileId`<sup>Required</sup> <a name="FileId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.fileId"></a>

```csharp
public string FileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#file_id DataGoogleArtifactRegistryFile#file_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#location DataGoogleArtifactRegistryFile#location}.

---

##### `OutputPath`<sup>Required</sup> <a name="OutputPath" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.outputPath"></a>

```csharp
public string OutputPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#output_path DataGoogleArtifactRegistryFile#output_path}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#repository_id DataGoogleArtifactRegistryFile#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#id DataGoogleArtifactRegistryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Overwrite`<sup>Optional</sup> <a name="Overwrite" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.overwrite"></a>

```csharp
public bool|IResolvable Overwrite { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#overwrite DataGoogleArtifactRegistryFile#overwrite}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#project DataGoogleArtifactRegistryFile#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileConfig.property.timeouts"></a>

```csharp
public DataGoogleArtifactRegistryFileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#timeouts DataGoogleArtifactRegistryFile#timeouts}

---

### DataGoogleArtifactRegistryFileTimeouts <a name="DataGoogleArtifactRegistryFileTimeouts" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryFileTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/artifact_registry_file#read DataGoogleArtifactRegistryFile#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryFileTimeoutsOutputReference <a name="DataGoogleArtifactRegistryFileTimeoutsOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryFileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataGoogleArtifactRegistryFileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataGoogleArtifactRegistryFile.DataGoogleArtifactRegistryFileTimeouts">DataGoogleArtifactRegistryFileTimeouts</a>

---



