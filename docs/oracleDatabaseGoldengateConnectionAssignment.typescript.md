# `oracleDatabaseGoldengateConnectionAssignment` Submodule <a name="`oracleDatabaseGoldengateConnectionAssignment` Submodule" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseGoldengateConnectionAssignment <a name="OracleDatabaseGoldengateConnectionAssignment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment google_oracle_database_goldengate_connection_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

new oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment(scope: Construct, id: string, config: OracleDatabaseGoldengateConnectionAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig">OracleDatabaseGoldengateConnectionAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig">OracleDatabaseGoldengateConnectionAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties"></a>

```typescript
public putProperties(value: OracleDatabaseGoldengateConnectionAssignmentProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts"></a>

```typescript
public putTimeouts(value: OracleDatabaseGoldengateConnectionAssignmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OracleDatabaseGoldengateConnectionAssignment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseGoldengateConnectionAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseGoldengateConnectionAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseGoldengateConnectionAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput">goldengateConnectionAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId">goldengateConnectionAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference">OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference">OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `goldengateConnectionAssignmentIdInput`<sup>Optional</sup> <a name="goldengateConnectionAssignmentIdInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentIdInput"></a>

```typescript
public readonly goldengateConnectionAssignmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: OracleDatabaseGoldengateConnectionAssignmentProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OracleDatabaseGoldengateConnectionAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `goldengateConnectionAssignmentId`<sup>Required</sup> <a name="goldengateConnectionAssignmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.goldengateConnectionAssignmentId"></a>

```typescript
public readonly goldengateConnectionAssignmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseGoldengateConnectionAssignmentConfig <a name="OracleDatabaseGoldengateConnectionAssignmentConfig" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.Initializer"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

const oracleDatabaseGoldengateConnectionAssignmentConfig: oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId">goldengateConnectionAssignmentId</a></code> | <code>string</code> | The ID of the GoldengateConnectionAssignment to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name for the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels or tags associated with the GoldengateConnectionAssignment. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `goldengateConnectionAssignmentId`<sup>Required</sup> <a name="goldengateConnectionAssignmentId" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.goldengateConnectionAssignmentId"></a>

```typescript
public readonly goldengateConnectionAssignmentId: string;
```

- *Type:* string

The ID of the GoldengateConnectionAssignment to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection_assignment_id OracleDatabaseGoldengateConnectionAssignment#goldengate_connection_assignment_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#location OracleDatabaseGoldengateConnectionAssignment#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.properties"></a>

```typescript
public readonly properties: OracleDatabaseGoldengateConnectionAssignmentProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#properties OracleDatabaseGoldengateConnectionAssignment#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_policy OracleDatabaseGoldengateConnectionAssignment#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#deletion_protection OracleDatabaseGoldengateConnectionAssignment#deletion_protection}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name for the GoldengateConnectionAssignment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#display_name OracleDatabaseGoldengateConnectionAssignment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#id OracleDatabaseGoldengateConnectionAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels or tags associated with the GoldengateConnectionAssignment.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#labels OracleDatabaseGoldengateConnectionAssignment#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#project OracleDatabaseGoldengateConnectionAssignment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OracleDatabaseGoldengateConnectionAssignmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#timeouts OracleDatabaseGoldengateConnectionAssignment#timeouts}

---

### OracleDatabaseGoldengateConnectionAssignmentProperties <a name="OracleDatabaseGoldengateConnectionAssignmentProperties" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.Initializer"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

const oracleDatabaseGoldengateConnectionAssignmentProperties: oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection">goldengateConnection</a></code> | <code>string</code> | The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment">goldengateDeployment</a></code> | <code>string</code> | The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}. |

---

##### `goldengateConnection`<sup>Required</sup> <a name="goldengateConnection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateConnection"></a>

```typescript
public readonly goldengateConnection: string;
```

- *Type:* string

The GoldengateConnection resource to be assigned. Format: projects/{project}/locations/{location}/goldengateConnections/{goldengate_connection}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_connection OracleDatabaseGoldengateConnectionAssignment#goldengate_connection}

---

##### `goldengateDeployment`<sup>Required</sup> <a name="goldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties.property.goldengateDeployment"></a>

```typescript
public readonly goldengateDeployment: string;
```

- *Type:* string

The GoldenGateDeployment to assign the connection to. Format: projects/{project}/locations/{location}/goldengateDeployments/{goldengate_deployment}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#goldengate_deployment OracleDatabaseGoldengateConnectionAssignment#goldengate_deployment}

---

### OracleDatabaseGoldengateConnectionAssignmentTimeouts <a name="OracleDatabaseGoldengateConnectionAssignmentTimeouts" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.Initializer"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

const oracleDatabaseGoldengateConnectionAssignmentTimeouts: oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#create OracleDatabaseGoldengateConnectionAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#delete OracleDatabaseGoldengateConnectionAssignment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_goldengate_connection_assignment#update OracleDatabaseGoldengateConnectionAssignment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

new oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput">goldengateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput">goldengateDeploymentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection">goldengateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment">goldengateDeployment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `goldengateConnectionInput`<sup>Optional</sup> <a name="goldengateConnectionInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnectionInput"></a>

```typescript
public readonly goldengateConnectionInput: string;
```

- *Type:* string

---

##### `goldengateDeploymentInput`<sup>Optional</sup> <a name="goldengateDeploymentInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeploymentInput"></a>

```typescript
public readonly goldengateDeploymentInput: string;
```

- *Type:* string

---

##### `goldengateConnection`<sup>Required</sup> <a name="goldengateConnection" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateConnection"></a>

```typescript
public readonly goldengateConnection: string;
```

- *Type:* string

---

##### `goldengateDeployment`<sup>Required</sup> <a name="goldengateDeployment" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.goldengateDeployment"></a>

```typescript
public readonly goldengateDeployment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OracleDatabaseGoldengateConnectionAssignmentProperties;
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentProperties">OracleDatabaseGoldengateConnectionAssignmentProperties</a>

---


### OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference <a name="OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { oracleDatabaseGoldengateConnectionAssignment } from '@cdktn/provider-google'

new oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OracleDatabaseGoldengateConnectionAssignmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseGoldengateConnectionAssignment.OracleDatabaseGoldengateConnectionAssignmentTimeouts">OracleDatabaseGoldengateConnectionAssignmentTimeouts</a>

---



