# `dataGoogleArtifactRegistryPackage` Submodule <a name="`dataGoogleArtifactRegistryPackage` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryPackage <a name="DataGoogleArtifactRegistryPackage" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package google_artifact_registry_package}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPackage(Construct Scope, string Id, DataGoogleArtifactRegistryPackageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig">DataGoogleArtifactRegistryPackageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig">DataGoogleArtifactRegistryPackageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryPackage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPackage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPackage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPackage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPackage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryPackage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryPackage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryPackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryPackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.annotations">Annotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryPackageConfig <a name="DataGoogleArtifactRegistryPackageConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPackageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Name,
    string RepositoryId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#location DataGoogleArtifactRegistryPackage#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#name DataGoogleArtifactRegistryPackage#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#repository_id DataGoogleArtifactRegistryPackage#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#id DataGoogleArtifactRegistryPackage#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#project DataGoogleArtifactRegistryPackage#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#location DataGoogleArtifactRegistryPackage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#name DataGoogleArtifactRegistryPackage#name}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#repository_id DataGoogleArtifactRegistryPackage#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#id DataGoogleArtifactRegistryPackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryPackage.DataGoogleArtifactRegistryPackageConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/artifact_registry_package#project DataGoogleArtifactRegistryPackage#project}.

---



