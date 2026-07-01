# `dataGoogleBackupDrBackupPlan` Submodule <a name="`dataGoogleBackupDrBackupPlan` Submodule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlan <a name="DataGoogleBackupDrBackupPlan" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan google_backup_dr_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan(scope: Construct, id: string, config: DataGoogleBackupDrBackupPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig">DataGoogleBackupDrBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig">DataGoogleBackupDrBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBackupDrBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleBackupDrBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupRules">backupRules</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList">DataGoogleBackupDrBackupPlanBackupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVault">backupVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVaultServiceAccount">backupVaultServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.computeInstanceBackupPlanProperties">computeInstanceBackupPlanProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.diskBackupPlanProperties">diskBackupPlanProperties</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.logRetentionDays">logRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.maxCustomOnDemandRetentionDays">maxCustomOnDemandRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.supportedResourceTypes">supportedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanIdInput">backupPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `backupRules`<sup>Required</sup> <a name="backupRules" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupRules"></a>

```typescript
public readonly backupRules: DataGoogleBackupDrBackupPlanBackupRulesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList">DataGoogleBackupDrBackupPlanBackupRulesList</a>

---

##### `backupVault`<sup>Required</sup> <a name="backupVault" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVault"></a>

```typescript
public readonly backupVault: string;
```

- *Type:* string

---

##### `backupVaultServiceAccount`<sup>Required</sup> <a name="backupVaultServiceAccount" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupVaultServiceAccount"></a>

```typescript
public readonly backupVaultServiceAccount: string;
```

- *Type:* string

---

##### `computeInstanceBackupPlanProperties`<sup>Required</sup> <a name="computeInstanceBackupPlanProperties" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.computeInstanceBackupPlanProperties"></a>

```typescript
public readonly computeInstanceBackupPlanProperties: DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `diskBackupPlanProperties`<sup>Required</sup> <a name="diskBackupPlanProperties" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.diskBackupPlanProperties"></a>

```typescript
public readonly diskBackupPlanProperties: DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList">DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList</a>

---

##### `logRetentionDays`<sup>Required</sup> <a name="logRetentionDays" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.logRetentionDays"></a>

```typescript
public readonly logRetentionDays: number;
```

- *Type:* number

---

##### `maxCustomOnDemandRetentionDays`<sup>Required</sup> <a name="maxCustomOnDemandRetentionDays" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.maxCustomOnDemandRetentionDays"></a>

```typescript
public readonly maxCustomOnDemandRetentionDays: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `supportedResourceTypes`<sup>Required</sup> <a name="supportedResourceTypes" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.supportedResourceTypes"></a>

```typescript
public readonly supportedResourceTypes: string[];
```

- *Type:* string[]

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backupPlanIdInput`<sup>Optional</sup> <a name="backupPlanIdInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanIdInput"></a>

```typescript
public readonly backupPlanIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanBackupRules <a name="DataGoogleBackupDrBackupPlanBackupRules" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanBackupRules: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules = { ... }
```


### DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanBackupRulesStandardSchedule: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule = { ... }
```


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow = { ... }
```


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth = { ... }
```


### DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties <a name="DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties = { ... }
```


### DataGoogleBackupDrBackupPlanConfig <a name="DataGoogleBackupDrBackupPlanConfig" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanConfig: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.backupPlanId">backupPlanId</a></code> | <code>string</code> | The ID of the backup plan. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.location">location</a></code> | <code>string</code> | The location for the backup plan. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#id DataGoogleBackupDrBackupPlan#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#project DataGoogleBackupDrBackupPlan#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupPlanId`<sup>Required</sup> <a name="backupPlanId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.backupPlanId"></a>

```typescript
public readonly backupPlanId: string;
```

- *Type:* string

The ID of the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#backup_plan_id DataGoogleBackupDrBackupPlan#backup_plan_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the backup plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#location DataGoogleBackupDrBackupPlan#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#id DataGoogleBackupDrBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/backup_dr_backup_plan#project DataGoogleBackupDrBackupPlan#project}.

---

### DataGoogleBackupDrBackupPlanDiskBackupPlanProperties <a name="DataGoogleBackupDrBackupPlanDiskBackupPlanProperties" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

const dataGoogleBackupDrBackupPlanDiskBackupPlanProperties: dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanBackupRulesList <a name="DataGoogleBackupDrBackupPlanBackupRulesList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanBackupRulesOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays">backupRetentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule">standardSchedule</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules">DataGoogleBackupDrBackupPlanBackupRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupRetentionDays`<sup>Required</sup> <a name="backupRetentionDays" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.backupRetentionDays"></a>

```typescript
public readonly backupRetentionDays: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `standardSchedule`<sup>Required</sup> <a name="standardSchedule" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.standardSchedule"></a>

```typescript
public readonly standardSchedule: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanBackupRules;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRules">DataGoogleBackupDrBackupPlanBackupRules</a>

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay">endHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay">startHourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endHourOfDay`<sup>Required</sup> <a name="endHourOfDay" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.endHourOfDay"></a>

```typescript
public readonly endHourOfDay: number;
```

- *Type:* number

---

##### `startHourOfDay`<sup>Required</sup> <a name="startHourOfDay" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.startHourOfDay"></a>

```typescript
public readonly startHourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindow</a>

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow">backupWindow</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth">daysOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency">hourlyFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType">recurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth">weekDayOfMonth</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule">DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupWindow`<sup>Required</sup> <a name="backupWindow" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.backupWindow"></a>

```typescript
public readonly backupWindow: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleBackupWindowList</a>

---

##### `daysOfMonth`<sup>Required</sup> <a name="daysOfMonth" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfMonth"></a>

```typescript
public readonly daysOfMonth: number[];
```

- *Type:* number[]

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hourlyFrequency`<sup>Required</sup> <a name="hourlyFrequency" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.hourlyFrequency"></a>

```typescript
public readonly hourlyFrequency: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `recurrenceType`<sup>Required</sup> <a name="recurrenceType" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.recurrenceType"></a>

```typescript
public readonly recurrenceType: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `weekDayOfMonth`<sup>Required</sup> <a name="weekDayOfMonth" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.weekDayOfMonth"></a>

```typescript
public readonly weekDayOfMonth: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule">DataGoogleBackupDrBackupPlanBackupRulesStandardSchedule</a>

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference <a name="DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth">weekOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `weekOfMonth`<sup>Required</sup> <a name="weekOfMonth" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.weekOfMonth"></a>

```typescript
public readonly weekOfMonth: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth">DataGoogleBackupDrBackupPlanBackupRulesStandardScheduleWeekDayOfMonth</a>

---


### DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList <a name="DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference <a name="DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.guestFlush">guestFlush</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.guestFlush"></a>

```typescript
public readonly guestFlush: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties">DataGoogleBackupDrBackupPlanComputeInstanceBackupPlanProperties</a>

---


### DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList <a name="DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference <a name="DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlan } from '@cdktn/provider-google'

new dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.guestFlush">guestFlush</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties">DataGoogleBackupDrBackupPlanDiskBackupPlanProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.guestFlush"></a>

```typescript
public readonly guestFlush: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanDiskBackupPlanProperties;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleBackupDrBackupPlan.DataGoogleBackupDrBackupPlanDiskBackupPlanProperties">DataGoogleBackupDrBackupPlanDiskBackupPlanProperties</a>

---



