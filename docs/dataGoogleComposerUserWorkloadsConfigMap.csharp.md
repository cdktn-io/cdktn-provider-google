# `dataGoogleComposerUserWorkloadsConfigMap` Submodule <a name="`dataGoogleComposerUserWorkloadsConfigMap` Submodule" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerUserWorkloadsConfigMap <a name="DataGoogleComposerUserWorkloadsConfigMap" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map google_composer_user_workloads_config_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComposerUserWorkloadsConfigMap(Construct Scope, string Id, DataGoogleComposerUserWorkloadsConfigMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig">DataGoogleComposerUserWorkloadsConfigMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig">DataGoogleComposerUserWorkloadsConfigMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComposerUserWorkloadsConfigMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComposerUserWorkloadsConfigMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComposerUserWorkloadsConfigMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComposerUserWorkloadsConfigMap.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleComposerUserWorkloadsConfigMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleComposerUserWorkloadsConfigMap resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComposerUserWorkloadsConfigMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComposerUserWorkloadsConfigMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComposerUserWorkloadsConfigMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.data">Data</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.data"></a>

```csharp
public StringMap Data { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerUserWorkloadsConfigMapConfig <a name="DataGoogleComposerUserWorkloadsConfigMapConfig" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleComposerUserWorkloadsConfigMapConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Environment,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.environment">Environment</a></code> | <code>string</code> | Environment where the Kubernetes ConfigMap will be stored and used. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.name">Name</a></code> | <code>string</code> | Name of the Kubernetes ConfigMap. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#id DataGoogleComposerUserWorkloadsConfigMap#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#project DataGoogleComposerUserWorkloadsConfigMap#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.region">Region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment where the Kubernetes ConfigMap will be stored and used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#environment DataGoogleComposerUserWorkloadsConfigMap#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Kubernetes ConfigMap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#name DataGoogleComposerUserWorkloadsConfigMap#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#id DataGoogleComposerUserWorkloadsConfigMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#project DataGoogleComposerUserWorkloadsConfigMap#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google.dataGoogleComposerUserWorkloadsConfigMap.DataGoogleComposerUserWorkloadsConfigMapConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/composer_user_workloads_config_map#region DataGoogleComposerUserWorkloadsConfigMap#region}

---



