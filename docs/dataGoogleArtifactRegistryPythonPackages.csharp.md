# `dataGoogleArtifactRegistryPythonPackages` Submodule <a name="`dataGoogleArtifactRegistryPythonPackages` Submodule" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryPythonPackages <a name="DataGoogleArtifactRegistryPythonPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages google_artifact_registry_python_packages}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPythonPackages(Construct Scope, string Id, DataGoogleArtifactRegistryPythonPackagesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig">DataGoogleArtifactRegistryPythonPackagesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig">DataGoogleArtifactRegistryPythonPackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryPythonPackages resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPythonPackages.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPythonPackages.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPythonPackages.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleArtifactRegistryPythonPackages.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryPythonPackages resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryPythonPackages to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryPythonPackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryPythonPackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.pythonPackages">PythonPackages</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList">DataGoogleArtifactRegistryPythonPackagesPythonPackagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PythonPackages`<sup>Required</sup> <a name="PythonPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.pythonPackages"></a>

```csharp
public DataGoogleArtifactRegistryPythonPackagesPythonPackagesList PythonPackages { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList">DataGoogleArtifactRegistryPythonPackagesPythonPackagesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackages.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryPythonPackagesConfig <a name="DataGoogleArtifactRegistryPythonPackagesConfig" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPythonPackagesConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#location DataGoogleArtifactRegistryPythonPackages#location}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#repository_id DataGoogleArtifactRegistryPythonPackages#repository_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#id DataGoogleArtifactRegistryPythonPackages#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#project DataGoogleArtifactRegistryPythonPackages#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#location DataGoogleArtifactRegistryPythonPackages#location}.

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#repository_id DataGoogleArtifactRegistryPythonPackages#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#id DataGoogleArtifactRegistryPythonPackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/artifact_registry_python_packages#project DataGoogleArtifactRegistryPythonPackages#project}.

---

### DataGoogleArtifactRegistryPythonPackagesPythonPackages <a name="DataGoogleArtifactRegistryPythonPackagesPythonPackages" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPythonPackagesPythonPackages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryPythonPackagesPythonPackagesList <a name="DataGoogleArtifactRegistryPythonPackagesPythonPackagesList" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPythonPackagesPythonPackagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.get"></a>

```csharp
private DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference <a name="DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackages">DataGoogleArtifactRegistryPythonPackagesPythonPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackagesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleArtifactRegistryPythonPackagesPythonPackages InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleArtifactRegistryPythonPackages.DataGoogleArtifactRegistryPythonPackagesPythonPackages">DataGoogleArtifactRegistryPythonPackagesPythonPackages</a>

---



