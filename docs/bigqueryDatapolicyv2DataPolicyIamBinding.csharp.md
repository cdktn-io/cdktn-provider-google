# `bigqueryDatapolicyv2DataPolicyIamBinding` Submodule <a name="`bigqueryDatapolicyv2DataPolicyIamBinding` Submodule" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyv2DataPolicyIamBinding <a name="BigqueryDatapolicyv2DataPolicyIamBinding" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding google_bigquery_datapolicyv2_data_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryDatapolicyv2DataPolicyIamBinding(Construct Scope, string Id, BigqueryDatapolicyv2DataPolicyIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig">BigqueryDatapolicyv2DataPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig">BigqueryDatapolicyv2DataPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.putCondition"></a>

```csharp
private void PutCondition(BigqueryDatapolicyv2DataPolicyIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryDatapolicyv2DataPolicyIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryDatapolicyv2DataPolicyIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryDatapolicyv2DataPolicyIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

BigqueryDatapolicyv2DataPolicyIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BigqueryDatapolicyv2DataPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDatapolicyv2DataPolicyIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDatapolicyv2DataPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BigqueryDatapolicyv2DataPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference">BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.dataPolicyId">DataPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.condition"></a>

```csharp
public BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference">BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.conditionInput"></a>

```csharp
public BigqueryDatapolicyv2DataPolicyIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.dataPolicyIdInput"></a>

```csharp
public string DataPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.dataPolicyId"></a>

```csharp
public string DataPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyv2DataPolicyIamBindingCondition <a name="BigqueryDatapolicyv2DataPolicyIamBindingCondition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryDatapolicyv2DataPolicyIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#expression BigqueryDatapolicyv2DataPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#title BigqueryDatapolicyv2DataPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#description BigqueryDatapolicyv2DataPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#expression BigqueryDatapolicyv2DataPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#title BigqueryDatapolicyv2DataPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#description BigqueryDatapolicyv2DataPolicyIamBinding#description}.

---

### BigqueryDatapolicyv2DataPolicyIamBindingConfig <a name="BigqueryDatapolicyv2DataPolicyIamBindingConfig" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryDatapolicyv2DataPolicyIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataPolicyId,
    string[] Members,
    string Role,
    BigqueryDatapolicyv2DataPolicyIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#data_policy_id BigqueryDatapolicyv2DataPolicyIamBinding#data_policy_id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#members BigqueryDatapolicyv2DataPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#role BigqueryDatapolicyv2DataPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#id BigqueryDatapolicyv2DataPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#location BigqueryDatapolicyv2DataPolicyIamBinding#location}. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#project BigqueryDatapolicyv2DataPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.dataPolicyId"></a>

```csharp
public string DataPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#data_policy_id BigqueryDatapolicyv2DataPolicyIamBinding#data_policy_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#members BigqueryDatapolicyv2DataPolicyIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#role BigqueryDatapolicyv2DataPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.condition"></a>

```csharp
public BigqueryDatapolicyv2DataPolicyIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#condition BigqueryDatapolicyv2DataPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#id BigqueryDatapolicyv2DataPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#location BigqueryDatapolicyv2DataPolicyIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.40.0/docs/resources/bigquery_datapolicyv2_data_policy_iam_binding#project BigqueryDatapolicyv2DataPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference <a name="BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public BigqueryDatapolicyv2DataPolicyIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.bigqueryDatapolicyv2DataPolicyIamBinding.BigqueryDatapolicyv2DataPolicyIamBindingCondition">BigqueryDatapolicyv2DataPolicyIamBindingCondition</a>

---



