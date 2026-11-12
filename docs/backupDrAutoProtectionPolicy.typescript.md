# `backupDrAutoProtectionPolicy` Submodule <a name="`backupDrAutoProtectionPolicy` Submodule" id="@cdktn/provider-google.backupDrAutoProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrAutoProtectionPolicy <a name="BackupDrAutoProtectionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy google_backup_dr_auto_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy(scope: Construct, id: string, config: BackupDrAutoProtectionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig">BackupDrAutoProtectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig">BackupDrAutoProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails">putBackupPlanDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupPlanDetails` <a name="putBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails"></a>

```typescript
public putBackupPlanDetails(value: IResolvable | BackupDrAutoProtectionPolicyBackupPlanDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putBackupPlanDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria"></a>

```typescript
public putCriteria(value: BackupDrAutoProtectionPolicyCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupDrAutoProtectionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupDrAutoProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrAutoProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrAutoProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupDrAutoProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails">backupPlanDetails</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary">bindingSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary">policyEvaluationSummary</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput">autoProtectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput">backupPlanDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput">criteriaInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetails"></a>

```typescript
public readonly backupPlanDetails: BackupDrAutoProtectionPolicyBackupPlanDetailsList;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList">BackupDrAutoProtectionPolicyBackupPlanDetailsList</a>

---

##### `bindingSummary`<sup>Required</sup> <a name="bindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.bindingSummary"></a>

```typescript
public readonly bindingSummary: BackupDrAutoProtectionPolicyBindingSummaryList;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList">BackupDrAutoProtectionPolicyBindingSummaryList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteria"></a>

```typescript
public readonly criteria: BackupDrAutoProtectionPolicyCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference">BackupDrAutoProtectionPolicyCriteriaOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyEvaluationSummary`<sup>Required</sup> <a name="policyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.policyEvaluationSummary"></a>

```typescript
public readonly policyEvaluationSummary: BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList">BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrAutoProtectionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference">BackupDrAutoProtectionPolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `autoProtectionPolicyIdInput`<sup>Optional</sup> <a name="autoProtectionPolicyIdInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyIdInput"></a>

```typescript
public readonly autoProtectionPolicyIdInput: string;
```

- *Type:* string

---

##### `backupPlanDetailsInput`<sup>Optional</sup> <a name="backupPlanDetailsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.backupPlanDetailsInput"></a>

```typescript
public readonly backupPlanDetailsInput: IResolvable | BackupDrAutoProtectionPolicyBackupPlanDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: BackupDrAutoProtectionPolicyCriteria;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupDrAutoProtectionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.autoProtectionPolicyId"></a>

```typescript
public readonly autoProtectionPolicyId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetails <a name="BackupDrAutoProtectionPolicyBackupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyBackupPlanDetails: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan">backupPlan</a></code> | <code>string</code> | The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType">resourceType</a></code> | <code>string</code> | The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'. |

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

The resource name of the backup plan to apply to the matching resources, in the format 'projects/{project}/locations/{location}/backupPlans/{backup_plan_id}'.

The backup plan
must be in the same location as the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan BackupDrAutoProtectionPolicy#backup_plan}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The type of resource that this policy automatically protects, for example 'compute.googleapis.com/Instance' or 'compute.googleapis.com/Disk'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#resource_type BackupDrAutoProtectionPolicy#resource_type}

---

### BackupDrAutoProtectionPolicyBindingSummary <a name="BackupDrAutoProtectionPolicyBindingSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyBindingSummary: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary = { ... }
```


### BackupDrAutoProtectionPolicyConfig <a name="BackupDrAutoProtectionPolicyConfig" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyConfig: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId">autoProtectionPolicyId</a></code> | <code>string</code> | The ID of the auto protection policy. This becomes the final component of the policy's resource name. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails">backupPlanDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | backup_plan_details block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | criteria block. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location">location</a></code> | <code>string</code> | The location of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description">description</a></code> | <code>string</code> | A description of the auto protection policy. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `autoProtectionPolicyId`<sup>Required</sup> <a name="autoProtectionPolicyId" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.autoProtectionPolicyId"></a>

```typescript
public readonly autoProtectionPolicyId: string;
```

- *Type:* string

The ID of the auto protection policy. This becomes the final component of the policy's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#auto_protection_policy_id BackupDrAutoProtectionPolicy#auto_protection_policy_id}

---

##### `backupPlanDetails`<sup>Required</sup> <a name="backupPlanDetails" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.backupPlanDetails"></a>

```typescript
public readonly backupPlanDetails: IResolvable | BackupDrAutoProtectionPolicyBackupPlanDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

backup_plan_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#backup_plan_details BackupDrAutoProtectionPolicy#backup_plan_details}

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.criteria"></a>

```typescript
public readonly criteria: BackupDrAutoProtectionPolicyCriteria;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#criteria BackupDrAutoProtectionPolicy#criteria}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#location BackupDrAutoProtectionPolicy#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#deletion_policy BackupDrAutoProtectionPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the auto protection policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#description BackupDrAutoProtectionPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#id BackupDrAutoProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#project BackupDrAutoProtectionPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrAutoProtectionPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#timeouts BackupDrAutoProtectionPolicy#timeouts}

---

### BackupDrAutoProtectionPolicyCriteria <a name="BackupDrAutoProtectionPolicyCriteria" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyCriteria: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions">matchingConditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | matching_conditions block. |

---

##### `matchingConditions`<sup>Required</sup> <a name="matchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria.property.matchingConditions"></a>

```typescript
public readonly matchingConditions: IResolvable | BackupDrAutoProtectionPolicyCriteriaMatchingConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

matching_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#matching_conditions BackupDrAutoProtectionPolicy#matching_conditions}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditions <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyCriteriaMatchingConditions: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition">labelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | label_condition block. |

---

##### `labelCondition`<sup>Optional</sup> <a name="labelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions.property.labelCondition"></a>

```typescript
public readonly labelCondition: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

label_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#label_condition BackupDrAutoProtectionPolicy#label_condition}

---

### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key">key</a></code> | <code>string</code> | The key of the label to match. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values">values</a></code> | <code>string[]</code> | The values of the label to match. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the label to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#key BackupDrAutoProtectionPolicy#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The values of the label to match.

A resource matches the condition if its label
value is equal to any of the listed values. Currently, only one value is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#values BackupDrAutoProtectionPolicy#values}

---

### BackupDrAutoProtectionPolicyPolicyEvaluationSummary <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummary" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyPolicyEvaluationSummary: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary = { ... }
```


### BackupDrAutoProtectionPolicyTimeouts <a name="BackupDrAutoProtectionPolicyTimeouts" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

const backupDrAutoProtectionPolicyTimeouts: backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#create BackupDrAutoProtectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#delete BackupDrAutoProtectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/backup_dr_auto_protection_policy#update BackupDrAutoProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrAutoProtectionPolicyBackupPlanDetailsList <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get"></a>

```typescript
public get(index: number): BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrAutoProtectionPolicyBackupPlanDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>[]

---


### BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference <a name="BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput">backupPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan">backupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlanInput"></a>

```typescript
public readonly backupPlanInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrAutoProtectionPolicyBackupPlanDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBackupPlanDetails">BackupDrAutoProtectionPolicyBackupPlanDetails</a>

---


### BackupDrAutoProtectionPolicyBindingSummaryList <a name="BackupDrAutoProtectionPolicyBindingSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get"></a>

```typescript
public get(index: number): BackupDrAutoProtectionPolicyBindingSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BackupDrAutoProtectionPolicyBindingSummaryOutputReference <a name="BackupDrAutoProtectionPolicyBindingSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount">projectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectCount`<sup>Required</sup> <a name="projectCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.projectCount"></a>

```typescript
public readonly projectCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrAutoProtectionPolicyBindingSummary;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyBindingSummary">BackupDrAutoProtectionPolicyBindingSummary</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get"></a>

```typescript
public get(index: number): BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrAutoProtectionPolicyCriteriaMatchingConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


### BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition">putLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition">resetLabelCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelCondition` <a name="putLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition"></a>

```typescript
public putLabelCondition(value: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.putLabelCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `resetLabelCondition` <a name="resetLabelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.resetLabelCondition"></a>

```typescript
public resetLabelCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition">labelCondition</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput">labelConditionInput</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelCondition`<sup>Required</sup> <a name="labelCondition" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelCondition"></a>

```typescript
public readonly labelCondition: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelConditionOutputReference</a>

---

##### `labelConditionInput`<sup>Optional</sup> <a name="labelConditionInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.labelConditionInput"></a>

```typescript
public readonly labelConditionInput: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsLabelCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrAutoProtectionPolicyCriteriaMatchingConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>

---


### BackupDrAutoProtectionPolicyCriteriaOutputReference <a name="BackupDrAutoProtectionPolicyCriteriaOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions">putMatchingConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchingConditions` <a name="putMatchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions"></a>

```typescript
public putMatchingConditions(value: IResolvable | BackupDrAutoProtectionPolicyCriteriaMatchingConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.putMatchingConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions">matchingConditions</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput">matchingConditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchingConditions`<sup>Required</sup> <a name="matchingConditions" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditions"></a>

```typescript
public readonly matchingConditions: BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList">BackupDrAutoProtectionPolicyCriteriaMatchingConditionsList</a>

---

##### `matchingConditionsInput`<sup>Optional</sup> <a name="matchingConditionsInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.matchingConditionsInput"></a>

```typescript
public readonly matchingConditionsInput: IResolvable | BackupDrAutoProtectionPolicyCriteriaMatchingConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaMatchingConditions">BackupDrAutoProtectionPolicyCriteriaMatchingConditions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrAutoProtectionPolicyCriteria;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyCriteria">BackupDrAutoProtectionPolicyCriteria</a>

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get"></a>

```typescript
public get(index: number): BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference <a name="BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount">failedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount">matchingResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount">protectedResourceCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failedResourceCount`<sup>Required</sup> <a name="failedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.failedResourceCount"></a>

```typescript
public readonly failedResourceCount: string;
```

- *Type:* string

---

##### `matchingResourceCount`<sup>Required</sup> <a name="matchingResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.matchingResourceCount"></a>

```typescript
public readonly matchingResourceCount: string;
```

- *Type:* string

---

##### `protectedResourceCount`<sup>Required</sup> <a name="protectedResourceCount" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.protectedResourceCount"></a>

```typescript
public readonly protectedResourceCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrAutoProtectionPolicyPolicyEvaluationSummary;
```

- *Type:* <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyPolicyEvaluationSummary">BackupDrAutoProtectionPolicyPolicyEvaluationSummary</a>

---


### BackupDrAutoProtectionPolicyTimeoutsOutputReference <a name="BackupDrAutoProtectionPolicyTimeoutsOutputReference" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupDrAutoProtectionPolicy } from '@cdktn/provider-google'

new backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrAutoProtectionPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.backupDrAutoProtectionPolicy.BackupDrAutoProtectionPolicyTimeouts">BackupDrAutoProtectionPolicyTimeouts</a>

---



