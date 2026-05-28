# `dataGoogleOracleDatabaseGoldengateDeploymentEnvironments` Submodule <a name="`dataGoogleOracleDatabaseGoldengateDeploymentEnvironments` Submodule" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironments <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/oracle_database_goldengate_deployment_environments google_oracle_database_goldengate_deployment_environments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentEnvironments(Construct Scope, string Id, DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentEnvironments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseGoldengateDeploymentEnvironments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseGoldengateDeploymentEnvironments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseGoldengateDeploymentEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/oracle_database_goldengate_deployment_environments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseGoldengateDeploymentEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.goldengateDeploymentEnvironments">GoldengateDeploymentEnvironments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `GoldengateDeploymentEnvironments`<sup>Required</sup> <a name="GoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.goldengateDeploymentEnvironments"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList GoldengateDeploymentEnvironments { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig {
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
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/oracle_database_goldengate_deployment_environments#location DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/oracle_database_goldengate_deployment_environments#id DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/oracle_database_goldengate_deployment_environments#project DataGoogleOracleDatabaseGoldengateDeploymentEnvironments#project}

---

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get"></a>

```csharp
private DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference <a name="DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.defaultCpuCoreCount">DefaultCpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.environmentType">EnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.maxCpuCoreCount">MaxCpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.memoryGbPerCpuCore">MemoryGbPerCpuCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.minCpuCoreCount">MinCpuCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.networkBandwidthGbpsPerCpuCore">NetworkBandwidthGbpsPerCpuCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.storageUsageLimitGbPerCpuCore">StorageUsageLimitGbPerCpuCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.autoScalingEnabled"></a>

```csharp
public IResolvable AutoScalingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `DefaultCpuCoreCount`<sup>Required</sup> <a name="DefaultCpuCoreCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.defaultCpuCoreCount"></a>

```csharp
public double DefaultCpuCoreCount { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.environmentType"></a>

```csharp
public string EnvironmentType { get; }
```

- *Type:* string

---

##### `MaxCpuCoreCount`<sup>Required</sup> <a name="MaxCpuCoreCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.maxCpuCoreCount"></a>

```csharp
public double MaxCpuCoreCount { get; }
```

- *Type:* double

---

##### `MemoryGbPerCpuCore`<sup>Required</sup> <a name="MemoryGbPerCpuCore" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.memoryGbPerCpuCore"></a>

```csharp
public double MemoryGbPerCpuCore { get; }
```

- *Type:* double

---

##### `MinCpuCoreCount`<sup>Required</sup> <a name="MinCpuCoreCount" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.minCpuCoreCount"></a>

```csharp
public double MinCpuCoreCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkBandwidthGbpsPerCpuCore`<sup>Required</sup> <a name="NetworkBandwidthGbpsPerCpuCore" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.networkBandwidthGbpsPerCpuCore"></a>

```csharp
public double NetworkBandwidthGbpsPerCpuCore { get; }
```

- *Type:* double

---

##### `StorageUsageLimitGbPerCpuCore`<sup>Required</sup> <a name="StorageUsageLimitGbPerCpuCore" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.storageUsageLimitGbPerCpuCore"></a>

```csharp
public double StorageUsageLimitGbPerCpuCore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironmentsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleOracleDatabaseGoldengateDeploymentEnvironments.DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments">DataGoogleOracleDatabaseGoldengateDeploymentEnvironmentsGoldengateDeploymentEnvironments</a>

---



