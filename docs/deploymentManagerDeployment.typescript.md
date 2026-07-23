# `deploymentManagerDeployment` Submodule <a name="`deploymentManagerDeployment` Submodule" id="@cdktn/provider-google.deploymentManagerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentManagerDeployment <a name="DeploymentManagerDeployment" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment google_deployment_manager_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeployment(scope: Construct, id: string, config: DeploymentManagerDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig">DeploymentManagerDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig">DeploymentManagerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy">resetCreatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy">resetDeletePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLabels` <a name="putLabels" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels"></a>

```typescript
public putLabels(value: IResolvable | DeploymentManagerDeploymentLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putLabels.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget"></a>

```typescript
public putTarget(value: DeploymentManagerDeploymentTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: DeploymentManagerDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---

##### `resetCreatePolicy` <a name="resetCreatePolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetCreatePolicy"></a>

```typescript
public resetCreatePolicy(): void
```

##### `resetDeletePolicy` <a name="resetDeletePolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletePolicy"></a>

```typescript
public resetDeletePolicy(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetPreview` <a name="resetPreview" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetPreview"></a>

```typescript
public resetPreview(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeploymentManagerDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DeploymentManagerDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeploymentManagerDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeploymentManagerDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeploymentManagerDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels">labels</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest">manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput">createPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput">deletePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput">labelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput">previewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy">createPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy">deletePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview">preview</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labels"></a>

```typescript
public readonly labels: DeploymentManagerDeploymentLabelsList;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList">DeploymentManagerDeploymentLabelsList</a>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.target"></a>

```typescript
public readonly target: DeploymentManagerDeploymentTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference">DeploymentManagerDeploymentTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: DeploymentManagerDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference">DeploymentManagerDeploymentTimeoutsOutputReference</a>

---

##### `createPolicyInput`<sup>Optional</sup> <a name="createPolicyInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicyInput"></a>

```typescript
public readonly createPolicyInput: string;
```

- *Type:* string

---

##### `deletePolicyInput`<sup>Optional</sup> <a name="deletePolicyInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicyInput"></a>

```typescript
public readonly deletePolicyInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.labelsInput"></a>

```typescript
public readonly labelsInput: IResolvable | DeploymentManagerDeploymentLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.previewInput"></a>

```typescript
public readonly previewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.targetInput"></a>

```typescript
public readonly targetInput: DeploymentManagerDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DeploymentManagerDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---

##### `createPolicy`<sup>Required</sup> <a name="createPolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.createPolicy"></a>

```typescript
public readonly createPolicy: string;
```

- *Type:* string

---

##### `deletePolicy`<sup>Required</sup> <a name="deletePolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletePolicy"></a>

```typescript
public readonly deletePolicy: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentManagerDeploymentConfig <a name="DeploymentManagerDeploymentConfig" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

const deploymentManagerDeploymentConfig: deploymentManagerDeployment.DeploymentManagerDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name">name</a></code> | <code>string</code> | Unique name for the deployment. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy">createPolicy</a></code> | <code>string</code> | Set the policy to use for creating new resources. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy">deletePolicy</a></code> | <code>string</code> | Set the policy to use for deleting new resources on update/delete. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description">description</a></code> | <code>string</code> | Optional user-provided description of deployment. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels">labels</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]</code> | labels block. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview">preview</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, a deployment is created with "shell" resources that are not actually instantiated. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.target"></a>

```typescript
public readonly target: DeploymentManagerDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#target DeploymentManagerDeployment#target}

---

##### `createPolicy`<sup>Optional</sup> <a name="createPolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.createPolicy"></a>

```typescript
public readonly createPolicy: string;
```

- *Type:* string

Set the policy to use for creating new resources.

Only used on
create and update. Valid values are 'CREATE_OR_ACQUIRE' (default) or
'ACQUIRE'. If set to 'ACQUIRE' and resources do not already exist,
the deployment will fail. Note that updating this field does not
actually affect the deployment, just how it is updated. Default value: "CREATE_OR_ACQUIRE" Possible values: ["ACQUIRE", "CREATE_OR_ACQUIRE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#create_policy DeploymentManagerDeployment#create_policy}

---

##### `deletePolicy`<sup>Optional</sup> <a name="deletePolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletePolicy"></a>

```typescript
public readonly deletePolicy: string;
```

- *Type:* string

Set the policy to use for deleting new resources on update/delete.

Valid values are 'DELETE' (default) or 'ABANDON'. If 'DELETE',
resource is deleted after removal from Deployment Manager. If
'ABANDON', the resource is only removed from Deployment Manager
and is not actually deleted. Note that updating this field does not
actually change the deployment, just how it is updated. Default value: "DELETE" Possible values: ["ABANDON", "DELETE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#delete_policy DeploymentManagerDeployment#delete_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#deletion_policy DeploymentManagerDeployment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional user-provided description of deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#description DeploymentManagerDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#id DeploymentManagerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.labels"></a>

```typescript
public readonly labels: IResolvable | DeploymentManagerDeploymentLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#labels DeploymentManagerDeployment#labels}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, a deployment is created with "shell" resources that are not actually instantiated.

This allows you to preview a
deployment. It can be updated to false to actually deploy
with real resources.
 ~>**NOTE:** Deployment Manager does not allow update
of a deployment in preview (unless updating to preview=false). Thus,
Terraform will force-recreate deployments if either preview is updated
to true or if other fields are updated while preview is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#preview DeploymentManagerDeployment#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#project DeploymentManagerDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DeploymentManagerDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#timeouts DeploymentManagerDeployment#timeouts}

---

### DeploymentManagerDeploymentLabels <a name="DeploymentManagerDeploymentLabels" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

const deploymentManagerDeploymentLabels: deploymentManagerDeployment.DeploymentManagerDeploymentLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key">key</a></code> | <code>string</code> | Key for label. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value">value</a></code> | <code>string</code> | Value of label. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Key for label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#key DeploymentManagerDeployment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#value DeploymentManagerDeployment#value}

---

### DeploymentManagerDeploymentTarget <a name="DeploymentManagerDeploymentTarget" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

const deploymentManagerDeploymentTarget: deploymentManagerDeployment.DeploymentManagerDeploymentTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports">imports</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]</code> | imports block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.config"></a>

```typescript
public readonly config: DeploymentManagerDeploymentTargetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#config DeploymentManagerDeployment#config}

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget.property.imports"></a>

```typescript
public readonly imports: IResolvable | DeploymentManagerDeploymentTargetImports[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#imports DeploymentManagerDeployment#imports}

---

### DeploymentManagerDeploymentTargetConfig <a name="DeploymentManagerDeploymentTargetConfig" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

const deploymentManagerDeploymentTargetConfig: deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content">content</a></code> | <code>string</code> | The full YAML contents of your configuration file. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The full YAML contents of your configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

### DeploymentManagerDeploymentTargetImports <a name="DeploymentManagerDeploymentTargetImports" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

const deploymentManagerDeploymentTargetImports: deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content">content</a></code> | <code>string</code> | The full contents of the template that you want to import. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name">name</a></code> | <code>string</code> | The name of the template to import, as declared in the YAML configuration. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The full contents of the template that you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#content DeploymentManagerDeployment#content}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the template to import, as declared in the YAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#name DeploymentManagerDeployment#name}

---

### DeploymentManagerDeploymentTimeouts <a name="DeploymentManagerDeploymentTimeouts" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

const deploymentManagerDeploymentTimeouts: deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#create DeploymentManagerDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#delete DeploymentManagerDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/deployment_manager_deployment#update DeploymentManagerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentManagerDeploymentLabelsList <a name="DeploymentManagerDeploymentLabelsList" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get"></a>

```typescript
public get(index: number): DeploymentManagerDeploymentLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentManagerDeploymentLabels[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>[]

---


### DeploymentManagerDeploymentLabelsOutputReference <a name="DeploymentManagerDeploymentLabelsOutputReference" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentManagerDeploymentLabels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentLabels">DeploymentManagerDeploymentLabels</a>

---


### DeploymentManagerDeploymentTargetConfigOutputReference <a name="DeploymentManagerDeploymentTargetConfigOutputReference" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeploymentManagerDeploymentTargetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---


### DeploymentManagerDeploymentTargetImportsList <a name="DeploymentManagerDeploymentTargetImportsList" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get"></a>

```typescript
public get(index: number): DeploymentManagerDeploymentTargetImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentManagerDeploymentTargetImports[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]

---


### DeploymentManagerDeploymentTargetImportsOutputReference <a name="DeploymentManagerDeploymentTargetImportsOutputReference" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentManagerDeploymentTargetImports;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>

---


### DeploymentManagerDeploymentTargetOutputReference <a name="DeploymentManagerDeploymentTargetOutputReference" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports">putImports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports">resetImports</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig"></a>

```typescript
public putConfig(value: DeploymentManagerDeploymentTargetConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `putImports` <a name="putImports" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports"></a>

```typescript
public putImports(value: IResolvable | DeploymentManagerDeploymentTargetImports[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.putImports.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]

---

##### `resetImports` <a name="resetImports" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.resetImports"></a>

```typescript
public resetImports(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports">imports</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput">importsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.config"></a>

```typescript
public readonly config: DeploymentManagerDeploymentTargetConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfigOutputReference">DeploymentManagerDeploymentTargetConfigOutputReference</a>

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.imports"></a>

```typescript
public readonly imports: DeploymentManagerDeploymentTargetImportsList;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImportsList">DeploymentManagerDeploymentTargetImportsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.configInput"></a>

```typescript
public readonly configInput: DeploymentManagerDeploymentTargetConfig;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetConfig">DeploymentManagerDeploymentTargetConfig</a>

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.importsInput"></a>

```typescript
public readonly importsInput: IResolvable | DeploymentManagerDeploymentTargetImports[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetImports">DeploymentManagerDeploymentTargetImports</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DeploymentManagerDeploymentTarget;
```

- *Type:* <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTarget">DeploymentManagerDeploymentTarget</a>

---


### DeploymentManagerDeploymentTimeoutsOutputReference <a name="DeploymentManagerDeploymentTimeoutsOutputReference" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { deploymentManagerDeployment } from '@cdktn/provider-google'

new deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeploymentManagerDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.deploymentManagerDeployment.DeploymentManagerDeploymentTimeouts">DeploymentManagerDeploymentTimeouts</a>

---



