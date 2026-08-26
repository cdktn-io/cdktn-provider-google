# `artifactRegistryRule` Submodule <a name="`artifactRegistryRule` Submodule" id="@cdktn/provider-google.artifactRegistryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactRegistryRule <a name="ArtifactRegistryRule" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule google_artifact_registry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

new artifactRegistryRule.ArtifactRegistryRule(scope: Construct, id: string, config: ArtifactRegistryRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig">ArtifactRegistryRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig">ArtifactRegistryRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetPackageId">resetPackageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putCondition"></a>

```typescript
public putCondition(value: ArtifactRegistryRuleCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putTimeouts"></a>

```typescript
public putTimeouts(value: ArtifactRegistryRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetPackageId` <a name="resetPackageId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetPackageId"></a>

```typescript
public resetPackageId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ArtifactRegistryRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isConstruct"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

artifactRegistryRule.ArtifactRegistryRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformElement"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

artifactRegistryRule.ArtifactRegistryRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformResource"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

artifactRegistryRule.ArtifactRegistryRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ArtifactRegistryRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ArtifactRegistryRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ArtifactRegistryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ArtifactRegistryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference">ArtifactRegistryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference">ArtifactRegistryRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageIdInput">packageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageId">packageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.condition"></a>

```typescript
public readonly condition: ArtifactRegistryRuleConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference">ArtifactRegistryRuleConditionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactRegistryRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference">ArtifactRegistryRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: ArtifactRegistryRuleCondition;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `packageIdInput`<sup>Optional</sup> <a name="packageIdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageIdInput"></a>

```typescript
public readonly packageIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ArtifactRegistryRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `packageId`<sup>Required</sup> <a name="packageId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactRegistryRuleCondition <a name="ArtifactRegistryRuleCondition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.Initializer"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

const artifactRegistryRuleCondition: artifactRegistryRule.ArtifactRegistryRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.expression">expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.description">description</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.location">location</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.title">title</a></code> | <code>string</code> | Optional. Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#expression ArtifactRegistryRule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional.

Description of the expression. This is a longer text which
describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#description ArtifactRegistryRule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Optional.

String indicating the location of the expression for error
reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#location ArtifactRegistryRule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Optional. Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#title ArtifactRegistryRule#title}

---

### ArtifactRegistryRuleConfig <a name="ArtifactRegistryRuleConfig" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.Initializer"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

const artifactRegistryRuleConfig: artifactRegistryRule.ArtifactRegistryRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.ruleId">ruleId</a></code> | <code>string</code> | The rule id to use for this repository. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.action">action</a></code> | <code>string</code> | The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#id ArtifactRegistryRule#id}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.location">location</a></code> | <code>string</code> | The name of the repository's location. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.operation">operation</a></code> | <code>string</code> | The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"]. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.packageId">packageId</a></code> | <code>string</code> | The package ID the rule applies to. If empty, this rule applies to all packages inside the repository. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#project ArtifactRegistryRule#project}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#repository_id ArtifactRegistryRule#repository_id}

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The rule id to use for this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#rule_id ArtifactRegistryRule#rule_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#action ArtifactRegistryRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.condition"></a>

```typescript
public readonly condition: ArtifactRegistryRuleCondition;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#condition ArtifactRegistryRule#condition}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#deletion_policy ArtifactRegistryRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#id ArtifactRegistryRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#location ArtifactRegistryRule#location}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#operation ArtifactRegistryRule#operation}

---

##### `packageId`<sup>Optional</sup> <a name="packageId" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.packageId"></a>

```typescript
public readonly packageId: string;
```

- *Type:* string

The package ID the rule applies to. If empty, this rule applies to all packages inside the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#package_id ArtifactRegistryRule#package_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#project ArtifactRegistryRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ArtifactRegistryRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#timeouts ArtifactRegistryRule#timeouts}

---

### ArtifactRegistryRuleTimeouts <a name="ArtifactRegistryRuleTimeouts" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.Initializer"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

const artifactRegistryRuleTimeouts: artifactRegistryRule.ArtifactRegistryRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#create ArtifactRegistryRule#create}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#delete ArtifactRegistryRule#delete}. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#update ArtifactRegistryRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#create ArtifactRegistryRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#delete ArtifactRegistryRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/artifact_registry_rule#update ArtifactRegistryRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactRegistryRuleConditionOutputReference <a name="ArtifactRegistryRuleConditionOutputReference" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

new artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ArtifactRegistryRuleCondition;
```

- *Type:* <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleCondition">ArtifactRegistryRuleCondition</a>

---


### ArtifactRegistryRuleTimeoutsOutputReference <a name="ArtifactRegistryRuleTimeoutsOutputReference" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { artifactRegistryRule } from '@cdktn/provider-google'

new artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ArtifactRegistryRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.artifactRegistryRule.ArtifactRegistryRuleTimeouts">ArtifactRegistryRuleTimeouts</a>

---



