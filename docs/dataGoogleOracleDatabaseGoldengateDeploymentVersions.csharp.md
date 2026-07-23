# `dataGoogleOracleDatabaseGoldengateDeploymentVersions` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentVersions` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersions <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_versions google_oracle_database_goldengate_deployment_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersions(Construct Scope, string Id, DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig">DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig">DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentVersions resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.goldengateDeploymentVersions">GoldengateDeploymentVersions</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `GoldengateDeploymentVersions`<sup>Required</sup> <a name="GoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.goldengateDeploymentVersions"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList GoldengateDeploymentVersions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_versions#location DataGoogleOracleDatabaseGoldengateDeploymentVersions#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_versions#id DataGoogleOracleDatabaseGoldengateDeploymentVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/oracle_database_goldengate_deployment_versions#project DataGoogleOracleDatabaseGoldengateDeploymentVersions#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions {

};
```


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get"></a>

```csharp
private DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.properties"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersions</a>

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get"></a>

```csharp
private DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.oggVersion">OggVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseTime">ReleaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseType">ReleaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.securityFix">SecurityFix</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.supportEndTime">SupportEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.oggVersion"></a>

```csharp
public string OggVersion { get; }
```

- *Type:* string

---

##### `ReleaseTime`<sup>Required</sup> <a name="ReleaseTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseTime"></a>

```csharp
public string ReleaseTime { get; }
```

- *Type:* string

---

##### `ReleaseType`<sup>Required</sup> <a name="ReleaseType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.releaseType"></a>

```csharp
public string ReleaseType { get; }
```

- *Type:* string

---

##### `SecurityFix`<sup>Required</sup> <a name="SecurityFix" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.securityFix"></a>

```csharp
public IResolvable SecurityFix { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SupportEndTime`<sup>Required</sup> <a name="SupportEndTime" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.supportEndTime"></a>

```csharp
public string SupportEndTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentVersions.DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties">DataGoogleOracleDatabaseGoldengateDeploymentVersionsGoldengateDeploymentVersionsProperties</a>

---



