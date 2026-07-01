# `dataGoogleDataLineageConfig` Submodule <a name="`dataGoogleDataLineageConfig` Submodule" id="@cdktn/provider-google.dataGoogleDataLineageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDataLineageConfig <a name="DataGoogleDataLineageConfig" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/data_lineage_config google_data_lineage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfig(Construct Scope, string Id, DataGoogleDataLineageConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig">DataGoogleDataLineageConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig">DataGoogleDataLineageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDataLineageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataLineageConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataLineageConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataLineageConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleDataLineageConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleDataLineageConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDataLineageConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDataLineageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/data_lineage_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDataLineageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.ingestion">Ingestion</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList">DataGoogleDataLineageConfigIngestionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Ingestion`<sup>Required</sup> <a name="Ingestion" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.ingestion"></a>

```csharp
public DataGoogleDataLineageConfigIngestionList Ingestion { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList">DataGoogleDataLineageConfigIngestionList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDataLineageConfigConfig <a name="DataGoogleDataLineageConfigConfig" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Parent,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.location">Location</a></code> | <code>string</code> | The region of the data lineage configuration for integration. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.parent">Parent</a></code> | <code>string</code> | Parent scope for the config. Format: projects/{project-id\|project-number} or folders/{folder-number} or organizations/{organization-number}. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/data_lineage_config#id DataGoogleDataLineageConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The region of the data lineage configuration for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/data_lineage_config#location DataGoogleDataLineageConfig#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Parent scope for the config. Format: projects/{project-id|project-number} or folders/{folder-number} or organizations/{organization-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/data_lineage_config#parent DataGoogleDataLineageConfig#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/data_lineage_config#id DataGoogleDataLineageConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleDataLineageConfigIngestion <a name="DataGoogleDataLineageConfigIngestion" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestion {

};
```


### DataGoogleDataLineageConfigIngestionRule <a name="DataGoogleDataLineageConfigIngestionRule" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRule {

};
```


### DataGoogleDataLineageConfigIngestionRuleIntegrationSelector <a name="DataGoogleDataLineageConfigIngestionRuleIntegrationSelector" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleIntegrationSelector {

};
```


### DataGoogleDataLineageConfigIngestionRuleLineageEnablement <a name="DataGoogleDataLineageConfigIngestionRuleLineageEnablement" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleLineageEnablement {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDataLineageConfigIngestionList <a name="DataGoogleDataLineageConfigIngestionList" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.get"></a>

```csharp
private DataGoogleDataLineageConfigIngestionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataLineageConfigIngestionOutputReference <a name="DataGoogleDataLineageConfigIngestionOutputReference" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList">DataGoogleDataLineageConfigIngestionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestion">DataGoogleDataLineageConfigIngestion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.rule"></a>

```csharp
public DataGoogleDataLineageConfigIngestionRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList">DataGoogleDataLineageConfigIngestionRuleList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataLineageConfigIngestion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestion">DataGoogleDataLineageConfigIngestion</a>

---


### DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList <a name="DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.get"></a>

```csharp
private DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference <a name="DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration">Integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelector">DataGoogleDataLineageConfigIngestionRuleIntegrationSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.integration"></a>

```csharp
public string Integration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataLineageConfigIngestionRuleIntegrationSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelector">DataGoogleDataLineageConfigIngestionRuleIntegrationSelector</a>

---


### DataGoogleDataLineageConfigIngestionRuleLineageEnablementList <a name="DataGoogleDataLineageConfigIngestionRuleLineageEnablementList" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleLineageEnablementList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.get"></a>

```csharp
private DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference <a name="DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablement">DataGoogleDataLineageConfigIngestionRuleLineageEnablement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataLineageConfigIngestionRuleLineageEnablement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablement">DataGoogleDataLineageConfigIngestionRuleLineageEnablement</a>

---


### DataGoogleDataLineageConfigIngestionRuleList <a name="DataGoogleDataLineageConfigIngestionRuleList" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.get"></a>

```csharp
private DataGoogleDataLineageConfigIngestionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleDataLineageConfigIngestionRuleOutputReference <a name="DataGoogleDataLineageConfigIngestionRuleOutputReference" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleDataLineageConfigIngestionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelector">IntegrationSelector</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList">DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablement">LineageEnablement</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList">DataGoogleDataLineageConfigIngestionRuleLineageEnablementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRule">DataGoogleDataLineageConfigIngestionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntegrationSelector`<sup>Required</sup> <a name="IntegrationSelector" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.integrationSelector"></a>

```csharp
public DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList IntegrationSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList">DataGoogleDataLineageConfigIngestionRuleIntegrationSelectorList</a>

---

##### `LineageEnablement`<sup>Required</sup> <a name="LineageEnablement" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.lineageEnablement"></a>

```csharp
public DataGoogleDataLineageConfigIngestionRuleLineageEnablementList LineageEnablement { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleLineageEnablementList">DataGoogleDataLineageConfigIngestionRuleLineageEnablementList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRuleOutputReference.property.internalValue"></a>

```csharp
public DataGoogleDataLineageConfigIngestionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleDataLineageConfig.DataGoogleDataLineageConfigIngestionRule">DataGoogleDataLineageConfigIngestionRule</a>

---



