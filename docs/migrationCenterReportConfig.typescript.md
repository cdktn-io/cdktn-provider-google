# `migrationCenterReportConfig` Submodule <a name="`migrationCenterReportConfig` Submodule" id="@cdktn/provider-google.migrationCenterReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterReportConfig <a name="MigrationCenterReportConfig" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config google_migration_center_report_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

new migrationCenterReportConfig.MigrationCenterReportConfig(scope: Construct, id: string, config: MigrationCenterReportConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig">MigrationCenterReportConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig">MigrationCenterReportConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putGroupPreferencesetAssignments">putGroupPreferencesetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGroupPreferencesetAssignments` <a name="putGroupPreferencesetAssignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putGroupPreferencesetAssignments"></a>

```typescript
public putGroupPreferencesetAssignments(value: IResolvable | MigrationCenterReportConfigGroupPreferencesetAssignments[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putGroupPreferencesetAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: MigrationCenterReportConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterReportConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MigrationCenterReportConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterReportConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignments">groupPreferencesetAssignments</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList">MigrationCenterReportConfigGroupPreferencesetAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference">MigrationCenterReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput">groupPreferencesetAssignmentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigIdInput">reportConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigId">reportConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `groupPreferencesetAssignments`<sup>Required</sup> <a name="groupPreferencesetAssignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignments"></a>

```typescript
public readonly groupPreferencesetAssignments: MigrationCenterReportConfigGroupPreferencesetAssignmentsList;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList">MigrationCenterReportConfigGroupPreferencesetAssignmentsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterReportConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference">MigrationCenterReportConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `groupPreferencesetAssignmentsInput`<sup>Optional</sup> <a name="groupPreferencesetAssignmentsInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.groupPreferencesetAssignmentsInput"></a>

```typescript
public readonly groupPreferencesetAssignmentsInput: IResolvable | MigrationCenterReportConfigGroupPreferencesetAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reportConfigIdInput`<sup>Optional</sup> <a name="reportConfigIdInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigIdInput"></a>

```typescript
public readonly reportConfigIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MigrationCenterReportConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reportConfigId`<sup>Required</sup> <a name="reportConfigId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.reportConfigId"></a>

```typescript
public readonly reportConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterReportConfigConfig <a name="MigrationCenterReportConfigConfig" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

const migrationCenterReportConfigConfig: migrationCenterReportConfig.MigrationCenterReportConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.groupPreferencesetAssignments">groupPreferencesetAssignments</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]</code> | group_preferenceset_assignments block. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.reportConfigId">reportConfigId</a></code> | <code>string</code> | User specified ID for the report config. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.description">description</a></code> | <code>string</code> | Free-text description. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.displayName">displayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#id MigrationCenterReportConfig#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#project MigrationCenterReportConfig#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupPreferencesetAssignments`<sup>Required</sup> <a name="groupPreferencesetAssignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.groupPreferencesetAssignments"></a>

```typescript
public readonly groupPreferencesetAssignments: IResolvable | MigrationCenterReportConfigGroupPreferencesetAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

group_preferenceset_assignments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#group_preferenceset_assignments MigrationCenterReportConfig#group_preferenceset_assignments}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#location MigrationCenterReportConfig#location}

---

##### `reportConfigId`<sup>Required</sup> <a name="reportConfigId" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.reportConfigId"></a>

```typescript
public readonly reportConfigId: string;
```

- *Type:* string

User specified ID for the report config.

It will become the last component
of the report config name. The ID must be unique within the project, must
conform with RFC-1034, is restricted to lower-cased letters, and has a
maximum length of 63 characters. The ID must match the regular expression:
[a-z]([a-z0-9-]{0,61}[a-z0-9])?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#report_config_id MigrationCenterReportConfig#report_config_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#deletion_policy MigrationCenterReportConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Free-text description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#description MigrationCenterReportConfig#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#display_name MigrationCenterReportConfig#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#id MigrationCenterReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#project MigrationCenterReportConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterReportConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#timeouts MigrationCenterReportConfig#timeouts}

---

### MigrationCenterReportConfigGroupPreferencesetAssignments <a name="MigrationCenterReportConfigGroupPreferencesetAssignments" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

const migrationCenterReportConfigGroupPreferencesetAssignments: migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.group">group</a></code> | <code>string</code> | Name of the group. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet">preferenceSet</a></code> | <code>string</code> | Name of the Preference Set. |

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#group MigrationCenterReportConfig#group}

---

##### `preferenceSet`<sup>Required</sup> <a name="preferenceSet" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments.property.preferenceSet"></a>

```typescript
public readonly preferenceSet: string;
```

- *Type:* string

Name of the Preference Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#preference_set MigrationCenterReportConfig#preference_set}

---

### MigrationCenterReportConfigTimeouts <a name="MigrationCenterReportConfigTimeouts" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

const migrationCenterReportConfigTimeouts: migrationCenterReportConfig.MigrationCenterReportConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#create MigrationCenterReportConfig#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#delete MigrationCenterReportConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#create MigrationCenterReportConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/migration_center_report_config#delete MigrationCenterReportConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterReportConfigGroupPreferencesetAssignmentsList <a name="MigrationCenterReportConfigGroupPreferencesetAssignmentsList" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

new migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.get"></a>

```typescript
public get(index: number): MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterReportConfigGroupPreferencesetAssignments[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>[]

---


### MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference <a name="MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

new migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput">preferenceSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet">preferenceSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `preferenceSetInput`<sup>Optional</sup> <a name="preferenceSetInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSetInput"></a>

```typescript
public readonly preferenceSetInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `preferenceSet`<sup>Required</sup> <a name="preferenceSet" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.preferenceSet"></a>

```typescript
public readonly preferenceSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterReportConfigGroupPreferencesetAssignments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigGroupPreferencesetAssignments">MigrationCenterReportConfigGroupPreferencesetAssignments</a>

---


### MigrationCenterReportConfigTimeoutsOutputReference <a name="MigrationCenterReportConfigTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { migrationCenterReportConfig } from '@cdktn/provider-google'

new migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterReportConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterReportConfig.MigrationCenterReportConfigTimeouts">MigrationCenterReportConfigTimeouts</a>

---



