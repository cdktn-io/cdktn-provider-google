# `dataGoogleVmwareengineCluster` Submodule <a name="`dataGoogleVmwareengineCluster` Submodule" id="@cdktn/provider-google.dataGoogleVmwareengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineCluster <a name="DataGoogleVmwareengineCluster" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/vmwareengine_cluster google_vmwareengine_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineCluster(Construct Scope, string Id, DataGoogleVmwareengineClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig">DataGoogleVmwareengineClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig">DataGoogleVmwareengineClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineCluster.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleVmwareengineCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleVmwareengineCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/vmwareengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.autoscalingSettings">AutoscalingSettings</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList">DataGoogleVmwareengineClusterAutoscalingSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.datastoreMountConfig">DatastoreMountConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList">DataGoogleVmwareengineClusterDatastoreMountConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.management">Management</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nodeTypeConfigs">NodeTypeConfigs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList">DataGoogleVmwareengineClusterNodeTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AutoscalingSettings`<sup>Required</sup> <a name="AutoscalingSettings" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.autoscalingSettings"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsList AutoscalingSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList">DataGoogleVmwareengineClusterAutoscalingSettingsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DatastoreMountConfig`<sup>Required</sup> <a name="DatastoreMountConfig" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.datastoreMountConfig"></a>

```csharp
public DataGoogleVmwareengineClusterDatastoreMountConfigList DatastoreMountConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList">DataGoogleVmwareengineClusterDatastoreMountConfigList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Management`<sup>Required</sup> <a name="Management" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.management"></a>

```csharp
public IResolvable Management { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NodeTypeConfigs`<sup>Required</sup> <a name="NodeTypeConfigs" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nodeTypeConfigs"></a>

```csharp
public DataGoogleVmwareengineClusterNodeTypeConfigsList NodeTypeConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList">DataGoogleVmwareengineClusterNodeTypeConfigsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineClusterAutoscalingSettings <a name="DataGoogleVmwareengineClusterAutoscalingSettings" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettings {

};
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies {

};
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {

};
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds {

};
```


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds {

};
```


### DataGoogleVmwareengineClusterConfig <a name="DataGoogleVmwareengineClusterConfig" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Parent,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.name">Name</a></code> | <code>string</code> | The ID of the Cluster. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.parent">Parent</a></code> | <code>string</code> | The resource name of the private cloud to create a new cluster in. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/vmwareengine_cluster#id DataGoogleVmwareengineCluster#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/vmwareengine_cluster#name DataGoogleVmwareengineCluster#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The resource name of the private cloud to create a new cluster in.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/vmwareengine_cluster#parent DataGoogleVmwareengineCluster#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/vmwareengine_cluster#id DataGoogleVmwareengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleVmwareengineClusterDatastoreMountConfig <a name="DataGoogleVmwareengineClusterDatastoreMountConfig" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterDatastoreMountConfig {

};
```


### DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork <a name="DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork {

};
```


### DataGoogleVmwareengineClusterNodeTypeConfigs <a name="DataGoogleVmwareengineClusterNodeTypeConfigs" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterNodeTypeConfigs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get"></a>

```csharp
private DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn">ScaleIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut">ScaleOut</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleIn"></a>

```csharp
public double ScaleIn { get; }
```

- *Type:* double

---

##### `ScaleOut`<sup>Required</sup> <a name="ScaleOut" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.scaleOut"></a>

```csharp
public double ScaleOut { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get"></a>

```csharp
private DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn">ScaleIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut">ScaleOut</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleIn"></a>

```csharp
public double ScaleIn { get; }
```

- *Type:* double

---

##### `ScaleOut`<sup>Required</sup> <a name="ScaleOut" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.scaleOut"></a>

```csharp
public double ScaleOut { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get"></a>

```csharp
private DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId">AutoscalePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds">ConsumedMemoryThresholds</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds">CpuThresholds</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize">ScaleOutSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds">StorageThresholds</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalePolicyId`<sup>Required</sup> <a name="AutoscalePolicyId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.autoscalePolicyId"></a>

```csharp
public string AutoscalePolicyId { get; }
```

- *Type:* string

---

##### `ConsumedMemoryThresholds`<sup>Required</sup> <a name="ConsumedMemoryThresholds" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.consumedMemoryThresholds"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList ConsumedMemoryThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList</a>

---

##### `CpuThresholds`<sup>Required</sup> <a name="CpuThresholds" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.cpuThresholds"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList CpuThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList</a>

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `ScaleOutSize`<sup>Required</sup> <a name="ScaleOutSize" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.scaleOutSize"></a>

```csharp
public double ScaleOutSize { get; }
```

- *Type:* double

---

##### `StorageThresholds`<sup>Required</sup> <a name="StorageThresholds" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.storageThresholds"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList StorageThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPolicies</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get"></a>

```csharp
private DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn">ScaleIn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut">ScaleOut</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleIn`<sup>Required</sup> <a name="ScaleIn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleIn"></a>

```csharp
public double ScaleIn { get; }
```

- *Type:* double

---

##### `ScaleOut`<sup>Required</sup> <a name="ScaleOut" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.scaleOut"></a>

```csharp
public double ScaleOut { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds</a>

---


### DataGoogleVmwareengineClusterAutoscalingSettingsList <a name="DataGoogleVmwareengineClusterAutoscalingSettingsList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.get"></a>

```csharp
private DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference <a name="DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies">AutoscalingPolicies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod">CoolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount">MaxClusterNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount">MinClusterNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings">DataGoogleVmwareengineClusterAutoscalingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscalingPolicies`<sup>Required</sup> <a name="AutoscalingPolicies" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.autoscalingPolicies"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList AutoscalingPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList">DataGoogleVmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList</a>

---

##### `CoolDownPeriod`<sup>Required</sup> <a name="CoolDownPeriod" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.coolDownPeriod"></a>

```csharp
public string CoolDownPeriod { get; }
```

- *Type:* string

---

##### `MaxClusterNodeCount`<sup>Required</sup> <a name="MaxClusterNodeCount" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.maxClusterNodeCount"></a>

```csharp
public double MaxClusterNodeCount { get; }
```

- *Type:* double

---

##### `MinClusterNodeCount`<sup>Required</sup> <a name="MinClusterNodeCount" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.minClusterNodeCount"></a>

```csharp
public double MinClusterNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettingsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterAutoscalingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterAutoscalingSettings">DataGoogleVmwareengineClusterAutoscalingSettings</a>

---


### DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList <a name="DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.get"></a>

```csharp
private DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference <a name="DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.connectionCount">ConnectionCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.networkPeering">NetworkPeering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork">DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionCount`<sup>Required</sup> <a name="ConnectionCount" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.connectionCount"></a>

```csharp
public double ConnectionCount { get; }
```

- *Type:* double

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `NetworkPeering`<sup>Required</sup> <a name="NetworkPeering" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.networkPeering"></a>

```csharp
public string NetworkPeering { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork">DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetwork</a>

---


### DataGoogleVmwareengineClusterDatastoreMountConfigList <a name="DataGoogleVmwareengineClusterDatastoreMountConfigList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterDatastoreMountConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.get"></a>

```csharp
private DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference <a name="DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.accessMode">AccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.datastore">Datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreNetwork">DatastoreNetwork</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList">DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.fileShare">FileShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.ignoreColocation">IgnoreColocation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.nfsVersion">NfsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.servers">Servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfig">DataGoogleVmwareengineClusterDatastoreMountConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessMode`<sup>Required</sup> <a name="AccessMode" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.accessMode"></a>

```csharp
public string AccessMode { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.datastore"></a>

```csharp
public string Datastore { get; }
```

- *Type:* string

---

##### `DatastoreNetwork`<sup>Required</sup> <a name="DatastoreNetwork" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.datastoreNetwork"></a>

```csharp
public DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList DatastoreNetwork { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList">DataGoogleVmwareengineClusterDatastoreMountConfigDatastoreNetworkList</a>

---

##### `FileShare`<sup>Required</sup> <a name="FileShare" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.fileShare"></a>

```csharp
public string FileShare { get; }
```

- *Type:* string

---

##### `IgnoreColocation`<sup>Required</sup> <a name="IgnoreColocation" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.ignoreColocation"></a>

```csharp
public IResolvable IgnoreColocation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `NfsVersion`<sup>Required</sup> <a name="NfsVersion" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.nfsVersion"></a>

```csharp
public string NfsVersion { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.servers"></a>

```csharp
public string[] Servers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterDatastoreMountConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterDatastoreMountConfig">DataGoogleVmwareengineClusterDatastoreMountConfig</a>

---


### DataGoogleVmwareengineClusterNodeTypeConfigsList <a name="DataGoogleVmwareengineClusterNodeTypeConfigsList" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterNodeTypeConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.get"></a>

```csharp
private DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference <a name="DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount">CustomCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs">DataGoogleVmwareengineClusterNodeTypeConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomCoreCount`<sup>Required</sup> <a name="CustomCoreCount" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.customCoreCount"></a>

```csharp
public double CustomCoreCount { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineClusterNodeTypeConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleVmwareengineCluster.DataGoogleVmwareengineClusterNodeTypeConfigs">DataGoogleVmwareengineClusterNodeTypeConfigs</a>

---



