# `dataGoogleCloudfunctions2Function` Submodule <a name="`dataGoogleCloudfunctions2Function` Submodule" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudfunctions2Function <a name="DataGoogleCloudfunctions2Function" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function google_cloudfunctions2_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2Function(Construct Scope, string Id, DataGoogleCloudfunctions2FunctionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig">DataGoogleCloudfunctions2FunctionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig">DataGoogleCloudfunctions2FunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCloudfunctions2Function resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudfunctions2Function.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudfunctions2Function.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudfunctions2Function.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleCloudfunctions2Function.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleCloudfunctions2Function resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudfunctions2Function to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudfunctions2Function that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudfunctions2Function to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.buildConfig">BuildConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList">DataGoogleCloudfunctions2FunctionBuildConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.eventTrigger">EventTrigger</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList">DataGoogleCloudfunctions2FunctionEventTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.serviceConfig">ServiceConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList">DataGoogleCloudfunctions2FunctionServiceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BuildConfig`<sup>Required</sup> <a name="BuildConfig" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.buildConfig"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigList BuildConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList">DataGoogleCloudfunctions2FunctionBuildConfigList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `EventTrigger`<sup>Required</sup> <a name="EventTrigger" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.eventTrigger"></a>

```csharp
public DataGoogleCloudfunctions2FunctionEventTriggerList EventTrigger { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList">DataGoogleCloudfunctions2FunctionEventTriggerList</a>

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ServiceConfig`<sup>Required</sup> <a name="ServiceConfig" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.serviceConfig"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigList ServiceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList">DataGoogleCloudfunctions2FunctionServiceConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2Function.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudfunctions2FunctionBuildConfig <a name="DataGoogleCloudfunctions2FunctionBuildConfig" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfig {

};
```


### DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy <a name="DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy {

};
```


### DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy <a name="DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy {

};
```


### DataGoogleCloudfunctions2FunctionBuildConfigSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSource {

};
```


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource {

};
```


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource {

};
```


### DataGoogleCloudfunctions2FunctionConfig <a name="DataGoogleCloudfunctions2FunctionConfig" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.location">Location</a></code> | <code>string</code> | The location of this cloud function. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of this cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#location DataGoogleCloudfunctions2Function#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the function. Function names must be unique globally and match pattern 'projects/* /locations/* /functions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#name DataGoogleCloudfunctions2Function#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#id DataGoogleCloudfunctions2Function#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/cloudfunctions2_function#project DataGoogleCloudfunctions2Function#project}.

---

### DataGoogleCloudfunctions2FunctionEventTrigger <a name="DataGoogleCloudfunctions2FunctionEventTrigger" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionEventTrigger {

};
```


### DataGoogleCloudfunctions2FunctionEventTriggerEventFilters <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFilters" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionEventTriggerEventFilters {

};
```


### DataGoogleCloudfunctions2FunctionServiceConfig <a name="DataGoogleCloudfunctions2FunctionServiceConfig" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfig {

};
```


### DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface <a name="DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface {

};
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables {

};
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes {

};
```


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList <a name="DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy">DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicy</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigList <a name="DataGoogleCloudfunctions2FunctionBuildConfigList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionBuildConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList <a name="DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy">DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicy</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.automaticUpdatePolicy">AutomaticUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList">DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute">BuildAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository">DockerRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.onDeployUpdatePolicy">OnDeployUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList">DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool">WorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig">DataGoogleCloudfunctions2FunctionBuildConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticUpdatePolicy`<sup>Required</sup> <a name="AutomaticUpdatePolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.automaticUpdatePolicy"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList AutomaticUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList">DataGoogleCloudfunctions2FunctionBuildConfigAutomaticUpdatePolicyList</a>

---

##### `BuildAttribute`<sup>Required</sup> <a name="BuildAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.buildAttribute"></a>

```csharp
public string BuildAttribute { get; }
```

- *Type:* string

---

##### `DockerRepository`<sup>Required</sup> <a name="DockerRepository" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.dockerRepository"></a>

```csharp
public string DockerRepository { get; }
```

- *Type:* string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.entryPoint"></a>

```csharp
public string EntryPoint { get; }
```

- *Type:* string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `OnDeployUpdatePolicy`<sup>Required</sup> <a name="OnDeployUpdatePolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.onDeployUpdatePolicy"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList OnDeployUpdatePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList">DataGoogleCloudfunctions2FunctionBuildConfigOnDeployUpdatePolicyList</a>

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.source"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigSourceList Source { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceList</a>

---

##### `WorkerPool`<sup>Required</sup> <a name="WorkerPool" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.workerPool"></a>

```csharp
public string WorkerPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfig">DataGoogleCloudfunctions2FunctionBuildConfig</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource">RepoSource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource">StorageSource</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource">DataGoogleCloudfunctions2FunctionBuildConfigSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepoSource`<sup>Required</sup> <a name="RepoSource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.repoSource"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList RepoSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList</a>

---

##### `StorageSource`<sup>Required</sup> <a name="StorageSource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.storageSource"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList StorageSource { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSource">DataGoogleCloudfunctions2FunctionBuildConfigSource</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName">BranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha">CommitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir">Dir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex">InvertRegex</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName">RepoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.branchName"></a>

```csharp
public string BranchName { get; }
```

- *Type:* string

---

##### `CommitSha`<sup>Required</sup> <a name="CommitSha" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.commitSha"></a>

```csharp
public string CommitSha { get; }
```

- *Type:* string

---

##### `Dir`<sup>Required</sup> <a name="Dir" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.dir"></a>

```csharp
public string Dir { get; }
```

- *Type:* string

---

##### `InvertRegex`<sup>Required</sup> <a name="InvertRegex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.invertRegex"></a>

```csharp
public IResolvable InvertRegex { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.repoName"></a>

```csharp
public string RepoName { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceRepoSource</a>

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference <a name="DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource">DataGoogleCloudfunctions2FunctionBuildConfigSourceStorageSource</a>

---


### DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference <a name="DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters">DataGoogleCloudfunctions2FunctionEventTriggerEventFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionEventTriggerEventFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFilters">DataGoogleCloudfunctions2FunctionEventTriggerEventFilters</a>

---


### DataGoogleCloudfunctions2FunctionEventTriggerList <a name="DataGoogleCloudfunctions2FunctionEventTriggerList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionEventTriggerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionEventTriggerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionEventTriggerOutputReference <a name="DataGoogleCloudfunctions2FunctionEventTriggerOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionEventTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters">EventFilters</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList">DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger">Trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion">TriggerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger">DataGoogleCloudfunctions2FunctionEventTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventFilters`<sup>Required</sup> <a name="EventFilters" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventFilters"></a>

```csharp
public DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList EventFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList">DataGoogleCloudfunctions2FunctionEventTriggerEventFiltersList</a>

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.retryPolicy"></a>

```csharp
public string RetryPolicy { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.trigger"></a>

```csharp
public string Trigger { get; }
```

- *Type:* string

---

##### `TriggerRegion`<sup>Required</sup> <a name="TriggerRegion" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.triggerRegion"></a>

```csharp
public string TriggerRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTriggerOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionEventTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionEventTrigger">DataGoogleCloudfunctions2FunctionEventTrigger</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList <a name="DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface">DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface">DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterface</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigList <a name="DataGoogleCloudfunctions2FunctionServiceConfigList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionServiceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionServiceConfigOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision">AllTrafficOnLatestRevision</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu">AvailableCpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory">AvailableMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.binaryAuthorizationPolicy">BinaryAuthorizationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.directVpcEgress">DirectVpcEgress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.directVpcNetworkInterface">DirectVpcNetworkInterface</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList">DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri">GcfUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings">IngressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount">MaxInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency">MaxInstanceRequestConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount">MinInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables">SecretEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes">SecretVolumes</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector">VpcConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings">VpcConnectorEgressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig">DataGoogleCloudfunctions2FunctionServiceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllTrafficOnLatestRevision`<sup>Required</sup> <a name="AllTrafficOnLatestRevision" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.allTrafficOnLatestRevision"></a>

```csharp
public IResolvable AllTrafficOnLatestRevision { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AvailableCpu`<sup>Required</sup> <a name="AvailableCpu" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableCpu"></a>

```csharp
public string AvailableCpu { get; }
```

- *Type:* string

---

##### `AvailableMemory`<sup>Required</sup> <a name="AvailableMemory" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.availableMemory"></a>

```csharp
public string AvailableMemory { get; }
```

- *Type:* string

---

##### `BinaryAuthorizationPolicy`<sup>Required</sup> <a name="BinaryAuthorizationPolicy" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.binaryAuthorizationPolicy"></a>

```csharp
public string BinaryAuthorizationPolicy { get; }
```

- *Type:* string

---

##### `DirectVpcEgress`<sup>Required</sup> <a name="DirectVpcEgress" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.directVpcEgress"></a>

```csharp
public string DirectVpcEgress { get; }
```

- *Type:* string

---

##### `DirectVpcNetworkInterface`<sup>Required</sup> <a name="DirectVpcNetworkInterface" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.directVpcNetworkInterface"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList DirectVpcNetworkInterface { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList">DataGoogleCloudfunctions2FunctionServiceConfigDirectVpcNetworkInterfaceList</a>

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.environmentVariables"></a>

```csharp
public StringMap EnvironmentVariables { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `GcfUri`<sup>Required</sup> <a name="GcfUri" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.gcfUri"></a>

```csharp
public string GcfUri { get; }
```

- *Type:* string

---

##### `IngressSettings`<sup>Required</sup> <a name="IngressSettings" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.ingressSettings"></a>

```csharp
public string IngressSettings { get; }
```

- *Type:* string

---

##### `MaxInstanceCount`<sup>Required</sup> <a name="MaxInstanceCount" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceCount"></a>

```csharp
public double MaxInstanceCount { get; }
```

- *Type:* double

---

##### `MaxInstanceRequestConcurrency`<sup>Required</sup> <a name="MaxInstanceRequestConcurrency" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.maxInstanceRequestConcurrency"></a>

```csharp
public double MaxInstanceRequestConcurrency { get; }
```

- *Type:* double

---

##### `MinInstanceCount`<sup>Required</sup> <a name="MinInstanceCount" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.minInstanceCount"></a>

```csharp
public double MinInstanceCount { get; }
```

- *Type:* double

---

##### `SecretEnvironmentVariables`<sup>Required</sup> <a name="SecretEnvironmentVariables" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretEnvironmentVariables"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList SecretEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList</a>

---

##### `SecretVolumes`<sup>Required</sup> <a name="SecretVolumes" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.secretVolumes"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList SecretVolumes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList</a>

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `VpcConnector`<sup>Required</sup> <a name="VpcConnector" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnector"></a>

```csharp
public string VpcConnector { get; }
```

- *Type:* string

---

##### `VpcConnectorEgressSettings`<sup>Required</sup> <a name="VpcConnectorEgressSettings" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.vpcConnectorEgressSettings"></a>

```csharp
public string VpcConnectorEgressSettings { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfig">DataGoogleCloudfunctions2FunctionServiceConfig</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables">DataGoogleCloudfunctions2FunctionServiceConfigSecretEnvironmentVariables</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions">Versions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.versions"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumes</a>

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get"></a>

```csharp
private DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference <a name="DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCloudfunctions2Function.DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions">DataGoogleCloudfunctions2FunctionServiceConfigSecretVolumesVersions</a>

---



